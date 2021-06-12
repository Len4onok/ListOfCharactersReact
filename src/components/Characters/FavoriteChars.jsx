import React from 'react';
import { connect } from "react-redux";
import { dislikeCharacter, likeCharacter, requestFavoriteChars, setCurrentPage } from '../../redux/characters-reducer';
import Preloader from '../../common/preloader';
import Chars from './Chars';


class FavoriteChars extends React.Component {

  componentDidMount = () => {
    this.props.requestFavoriteChars(1, 10, this.props.arrayIdFavoriteChar);
    console.log(localStorage.getItem('favoriteCharsID'))
  }

  
  render() {
    return (
      <div>
        <h1>FavoriteChars</h1>
        {this.props.isFetching && <Preloader />}
        <Chars {...this.props} />
      </div>
    )
  }

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