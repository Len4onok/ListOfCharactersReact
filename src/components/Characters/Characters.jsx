import React from 'react';
import { connect } from "react-redux";
import Preloader from '../../common/preloader';
import Paginator from '../../common/Paginator';
import { useEffect } from 'react';
import { dislikeCharacter, likeCharacter, requestCharacters, setCurrentPage } from '../../redux/characters-reducer';
import Character from './Character';

const Characters = (props) => {

  useEffect(()=>{
    props.requestCharacters(props.currentPage)
  }, [props.currentPage])

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
      countItemsOnPage={props.countItemsOnPage}
      />
    {charactersElements}
  </div>
}


let mapStateToProps=(state)=>{
  return {
    characters: state.charactersPage.characters,
    totalCount: state.charactersPage.totalCount,
    currentPage: state.charactersPage.currentPage,
    countItemsOnPage: state.charactersPage.countItemsOnPage,
    isFetching: state.charactersPage.isFetching,
    arrayIdFavoriteChar: state.charactersPage.arrayIdFavoriteChar,
  }
}

export default connect(mapStateToProps, {
  setCurrentPage, requestCharacters, likeCharacter, dislikeCharacter
})(Characters)