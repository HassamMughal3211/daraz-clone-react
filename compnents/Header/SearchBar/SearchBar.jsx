import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'antd';
import "./SearchBar.css"
import logo from "../../images/logo.png"

const SearchBar = () => {
    const onSearch = value => console.log(value);
    const { Search } = Input;

    return (
        <div className="SearchBar">
            <div className="logowrapper">
            <img className="logo"  src={logo} alt="" />
            </div>
            {/* <div className="search">
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
            <div className="cart">
            <FontAwesomeIcon icon={faCartPlus} />
            </div> */}
        </div>
    )
}

export default SearchBar
