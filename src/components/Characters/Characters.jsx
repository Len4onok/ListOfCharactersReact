import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Preloader from '../../common/preloader';
import Paginator from '../../common/Paginator';
import Search from '../../common/Search';
import { dislikeCharacter, likeCharacter, requestCharacters, setCurrentPage, setSearchValue } from '../../redux/characters-reducer';
import Character from './Character';

const Characters = (props) => {

  useEffect(()=>{
    props.setCurrentPage(1);
    props.requestCharacters(1, '')
  }, [])

  const charactersElements = props.characters.map((item, index) => {
    return  <Character key={index} item={item} 
    likeCharacter={props.likeCharacter} 
    dislikeCharacter={props.dislikeCharacter}
    arrayIdFavoriteChar={props.arrayIdFavoriteChar}
       />
  })

  return <div>
    {props.isFetching && <Preloader />}
    <Paginator totalCount={props.totalCount}
      requestCharacters={props.requestCharacters}
      setCurrentPage={props.setCurrentPage}
      currentPage={props.currentPage} 
      searchValue={props.searchValue}
      />
    <Search 
      setCurrentPage={props.setCurrentPage}
      setSearchValue={props.setSearchValue}
      requestCharacters={props.requestCharacters}
      currentPage={props.currentPage} 
     />
    {charactersElements}
  </div>
}


let mapStateToProps=(state)=>{
  return {
    characters: state.charactersPage.characters,
    totalCount: state.charactersPage.totalCount,
    currentPage: state.charactersPage.currentPage,
    isFetching: state.charactersPage.isFetching,
    arrayIdFavoriteChar: state.charactersPage.arrayIdFavoriteChar,
    searchValue: state.charactersPage.searchValue,
  }
}

export default connect(mapStateToProps, {
  setCurrentPage, requestCharacters, likeCharacter, dislikeCharacter, setSearchValue
})(Characters)