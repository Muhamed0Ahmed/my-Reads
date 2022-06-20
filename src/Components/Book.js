import React from "react";

import Selected from "./Selected";
function Book(props) {
  const { homeBooks, onchangeItemShelf, book } = props;
  const imgLink = book.imageLinks ? book.imageLinks.smallThumbnail : "";

  return (
    <li style={{ display: "inline-block" }}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 140,
              height: 193,
              backgroundImage: `url(${imgLink})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            {homeBooks.filter((bookInHome) => bookInHome.title === book.title)
              .length === 1 ? (
              <Selected
                item={book}
                shelf={
                  homeBooks.filter(
                    (bookInHome) => bookInHome.title === book.title
                  )[0].shelf
                }
                onchangeItemShelf={onchangeItemShelf}
              />
            ) : (
              <Selected
                item={book}
                shelf="none"
                onchangeItemShelf={onchangeItemShelf}
              />
            )}
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
}

export default Book;
