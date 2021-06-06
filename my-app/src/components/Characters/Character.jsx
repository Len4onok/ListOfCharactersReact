import React from 'react';
import s from './Character.module.css';


const Character = ({ item, likeCharacter
  //followingInProgress, unfollow, follow 
}) => {

  let string = item.url;
  let nums = [];
  for (let i = 0; i < string.length; i++) {
    !isNaN(+string[i]) && nums.push(+string[i]);
  }
  let id = nums.join('')

  
  return <div className={s.image}>
    <div >{item.name}</div>
    <div >{item.gender}</div>
  
    <input id="toggleHeart" type="checkbox"/>
    <label for="toggleHeart" aria-label="like">❤</label>
     
      {/* <button onClick={() => {
        likeCharacter(id)
      }}>like</button> */}
      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>
   

</div>

    {/* {user.followed ?
        <button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            unfollow(user.id)
          }}>Unfollow</button>
        : <button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            follow(user.id)
          }}>Follow</button>
      } */}

  
}

export default Character;

