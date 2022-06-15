import Selected from "./Selected";

function ShelfBuilding(props) {
  const { books, title, shelf, onchangeItemShelf } = props;

  return (
    <section>
      <h2>{title}</h2>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {books
          .filter((book) => book.shelf === shelf)
          .map((book) => (
            <li key={`${book.id}`}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <Selected
                      item={book}
                      shelf={shelf}
                      onchangeItemShelf={onchangeItemShelf}
                    />
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ShelfBuilding;
