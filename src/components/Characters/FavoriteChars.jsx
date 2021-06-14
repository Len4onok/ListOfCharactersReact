import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { dislikeCharacter, likeCharacter, requestFavoriteChars } from '../../redux/characters-reducer';
import Preloader from '../../common/preloader';
import Character from './Character';


const FavoriteChars = (props) => {

  useEffect(() => {
    props.requestFavoriteChars(1, 10, props.arrayIdFavoriteChar)
  }, [])

  let favoriteCharsEl;
  (props.favoriteChars && props.favoriteChars.length > 0) 
    ? favoriteCharsEl = props.favoriteChars.map((item, index) => {
      return <Character key={index} item={item}
        likeCharacter={props.likeCharacter}
        dislikeCharacter={props.dislikeCharacter}
        arrayIdFavoriteChar={props.arrayIdFavoriteChar}
      />
    })
    : favoriteCharsEl = <div>To display your favorite characters, select them on the main page</div>

  return (
    <div>
      <h1>Favorite Chars</h1>
      {props.isFetching && <Preloader />}
      {favoriteCharsEl}
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    favoriteChars: state.charactersPage.favoriteChars,
    isFetching: state.charactersPage.isFetching,
    arrayIdFavoriteChar: state.charactersPage.arrayIdFavoriteChar
  }
}

export default connect(mapStateToProps, {
  requestFavoriteChars, likeCharacter, dislikeCharacter
})(FavoriteChars)