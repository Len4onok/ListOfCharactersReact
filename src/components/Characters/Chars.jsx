import React, { useState } from 'react';
import { connect } from "react-redux";
import { useEffect } from 'react';
import { dislikeCharacter, likeCharacter, requestFavoriteChars, setCurrentPage } from '../../redux/characters-reducer';
import Character from './Character';
import Preloader from '../../common/preloader';


const Chars=(props)=>{

  let favoriteCharsEl;
 (props.favoriteChars&&props.favoriteChars.length>0)?

    favoriteCharsEl = props.favoriteChars.map((item, index) => {
      return <Character key={index} item={item}
        likeCharacter={props.likeCharacter}
        dislikeCharacter={props.dislikeCharacter}
        arrayIdFavoriteChar={props.arrayIdFavoriteChar}
      />
    })
     : favoriteCharsEl = <div>To display your favorite characters, select them on the main page</div>


    return <div>
      {favoriteCharsEl}
    </div>

}


export default Chars;