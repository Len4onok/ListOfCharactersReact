import React from 'react';
import s from './Paginator.module.css';

const Paginator = ({ totalCount, requestCharacters, setCurrentPage, 
  currentPage, searchValue, countItemsOnPage = 10 }) => {
    
  let pagesCount = Math.ceil(totalCount / countItemsOnPage);
  let pagesArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  };

  const pageNumElem = pagesArr.map((p, index) => {
    return <span key={index} onClick={() => {
      requestCharacters(p, searchValue);
      setCurrentPage(p);
    }}
      className={(p === currentPage) ? s.usual + ' ' + s.selected : s.usual}>
      {p}</span>
  });

  return (
    <div>
      {pageNumElem}
    </div>
  );
}

export default Paginator;
