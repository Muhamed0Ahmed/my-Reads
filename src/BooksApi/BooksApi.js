const api = "https://reactnd-books-api.udacity.com/";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAll = () => 
  fetch(`${api}books`,{headers})
  .then((res) => res.json())
  .then((data) => data.books);

  export const getBookId = (id) => {
    fetch(`${api}books/:${id}`, {headers})
    .then((res) => res.json())
  .then((data) => data);

  }

  export const update = (book, shelf) =>
  fetch(`${api}books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())


  export const search = (query) =>
  fetch(`${api}search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books);
    
  