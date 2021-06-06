import React from 'react';
import s from './Character.module.css';


const Character = ({ item, likeCharacter, arrayIdFavoriteChar, 
  dislikeCharacter}) => {

  let string = item.url;
  let nums = [];
  for (let i = 0; i < string.length; i++) {
    !isNaN(+string[i]) && nums.push(+string[i]);
  }
  let id = +nums.join('')


  return (
    <div className={s.char}>
      <div >{item.name}</div>
      <div >{item.gender}</div>
      <div className={s.image}
        style={{
          backgroundImage: `url(https://starwars-visualguide.com/assets/img/characters/${id}.jpg)`
        }}>
        <input type="checkbox" checked={arrayIdFavoriteChar.includes(id)}
          onChange={(event) => {
            if (event.target.checked) {
              likeCharacter(id);
            } else {
              dislikeCharacter(id)
            }
          }}/>
      </div>
    </div >
  )
}

export default Character;

