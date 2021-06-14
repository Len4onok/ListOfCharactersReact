import { Route } from 'react-router';
import './App.css';
import Characters from './components/Characters/Characters';
import FavoriteChars from './components/Characters/FavoriteChars';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
 
  return (
    <div className='app-wrapper'>
    <Header />
    <Navigation />
    <div className='app-wrapper-content'>
      <Route exact path='/' render={() =>
        <Characters/>}>
      </Route>
      <Route path='/main' render={() =>
        <Characters/>}>
      </Route>
      <Route path='/favorites' render={() =>
        <FavoriteChars />}> 
      </Route>
    </div>
  </div>
  );
}

export default App;
