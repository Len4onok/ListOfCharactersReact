import React, { useEffect, useState } from 'react';


const Search = (props) => {
  

const [searchValue, setValue]=useState('');

const search=(e)=>{
  props.setCurrentPage(1); 
  setValue(e.target.value)
  props.setSearchValue(e.target.value);
  props.requestCharacters(props.currentPage, e.target.value);
}

  return (
    <div>
      <input value={searchValue} onChange={(e)=>search(e) }></input>
    </div>
  );
}


export default Search;