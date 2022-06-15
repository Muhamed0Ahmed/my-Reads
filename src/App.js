
import './App.css';
import { useEffect, useState } from 'react';
import * as BookAPI from "./BooksApi/BooksApi"
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Search from './Components/Search/Search';

function App() {
  const [books, setBooks] = useState([]);
  
  const onchangeItemShelf = (item, shelfNew) => {
    BookAPI.update(item, shelfNew).then(() => {
      BookAPI.getAll().then(book => {
        setBooks(book);
      })
    })
  }

  useEffect( () => {
    BookAPI.getAll().then(data => setBooks(data));
  }, [])
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/">
          <Route excat path="/" element={<Home books={books} onchangeItemShelf={ onchangeItemShelf}/>}/>
          <Route excat path="/search" element={<Search onchangeItemShelf={ onchangeItemShelf}/>} />
          
        </Route>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
