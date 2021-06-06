import React from 'react';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { dislikeCharacter, likeCharacter, requestFavoriteChars, setCurrentPage } from '../../redux/characters-reducer';
import Character from './Character';
import Preloader from '../../common/preloader';

const FavoriteChars = (props) => {

  useEffect(() => {
    props.requestFavoriteChars(1, 10, props.arrayIdFavoriteChar)
  }, [props.arrayIdFavoriteChar])


  const favoriteCharsEl = props.favoriteChars.map((item, index) => {
      return <Character key={index} item={item} 
      likeCharacter={props.likeCharacter} 
      dislikeCharacter={props.dislikeCharacter}
      arrayIdFavoriteChar={props.arrayIdFavoriteChar}
      />
    })

  return <div>
    <h1>FavoriteChars</h1>
    {props.isFetching && <Preloader />}
    {favoriteCharsEl}
      {/* {(props.favoriteChars.length > 0)
        ? 
        : <div>To display your favorite characters, select them on the main page</div>} */}
  </div>
}


let mapStateToProps = (state) => {
  return {
    favoriteChars: state.charactersPage.favoriteChars,
    characters: state.charactersPage.characters,
    totalCount: state.charactersPage.totalCount,
    currentPage: state.charactersPage.currentPage,
    countItemsOnPage: state.charactersPage.countItemsOnPage,
    isFetching: state.charactersPage.isFetching,
    arrayIdFavoriteChar: state.charactersPage.arrayIdFavoriteChar
  }
}

export default connect(mapStateToProps, {
  setCurrentPage, requestFavoriteChars, 
  likeCharacter, dislikeCharacter
})(FavoriteChars)