import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksApi from "../../BooksApi/BooksApi";
import Selected from "../Selected";
import "./Search.css";

function Search(props) {
  const { onchangeItemShelf } = props;
  const [searchInp, setSearchInp] = useState("");

  const [bookSearch, setBooksSearch] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchInput = (e) => {
    setSearchInp(e.target.value);
    if (e.target.value === "") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
      BooksApi.search(e.target.value).then((data) => setBooksSearch(data));
    }
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <Link to="/"></Link>
        <form>
          <input
            type="search"
            name="query"
            value={searchInp}
            placeholder="Search by title or author"
            onChange={handleSearchInput}
          />
        </form>
      </div>

      <div className="search-results">
        {!showSearch ? (
          <div className="no-query">
            Pleace write what you need to search it
          </div>
        ) : bookSearch.error ? (
          <div className="query-empty">
            not founded any Results because : {bookSearch.error}
          </div>
        ) : (
          <div className="books">
            <ul>
              {bookSearch.map((book) => (
                <li key={`${book.id}`} style={{ display: "inline-block" }}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 140,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <Selected
                          item={book}
                          shelf="none"
                          onchangeItemShelf={onchangeItemShelf}
                        />
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
