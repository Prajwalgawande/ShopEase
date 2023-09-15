import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import { useEffect } from "react";
import axios from "axios";
const FetchAllProduct = () => {

    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

}

export default FetchAllProduct