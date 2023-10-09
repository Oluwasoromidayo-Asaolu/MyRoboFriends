import React from "react";
import '../searchbox.css';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <input type="search" placeholder="search robots" onChange={searchChange}/>
    )
}

export default SearchBox;