import ShelfBuilding from "../ShelfBuilding";
import {Link} from "react-router-dom"
import "./Home.css"

function Home(props) {
    const {books, onchangeItemShelf} = props;
    return ( 
        <div className="home-container">
            <header>
                <h1>MyReads</h1>
            </header>
            <main>
                <section className="currently-reading">
                   
                    <ShelfBuilding books={books} title="Currently Reading" shelf="currentlyReading" onchangeItemShelf={onchangeItemShelf}/>
                </section>
                <section className="want-to-read">
                <ShelfBuilding books={books} title="Want to Read" shelf="wantToRead" onchangeItemShelf={onchangeItemShelf}/>
                    
                </section>
                <section className="read">
                <ShelfBuilding books={books} title="Read" shelf="read" onchangeItemShelf={onchangeItemShelf}/>
                </section>
            </main>
            <Link to="/search" className="link-right-bottom-to-search">+</Link>
        </div>
     );
}

export default Home;