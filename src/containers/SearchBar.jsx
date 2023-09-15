import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/searchbar.css'
import { addSearch } from "../redux/actions/productsActions";
const SearchBar = () => {
    const dispatch= useDispatch();
    const updateSearch=(e)=>{
        dispatch(addSearch(e.target.value));
    }
    return (
        <div className="searchBar">
        <div className="ui large icon input" >
            <input className='inputBox'onChange={(e)=>updateSearch(e)} type="text" placeholder="Search Product here..."/>
                <i className="search icon"></i>
        </div>
        </div>
    )
}

export default SearchBar