import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksApi from "../../BooksApi/BooksApi";
import "./Search.css";
import Book from "../Book";

function Search(props) {
  const {homeBooks, onchangeItemShelf } = props;
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
      console.log(bookSearch)
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
                <Book key={book.id} homeBooks={homeBooks} onchangeItemShelf={onchangeItemShelf} book={book}/>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
