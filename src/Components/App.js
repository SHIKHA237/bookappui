import React from "react";
import './App.css';
import AddBook from './AddBook';
import GetBooks from './GetBooks';

function App() {
    return (
        <div>
            <nav className=" navbar-align navbar navbar-light bg-light">
                <div className="container">
                    <h1>Book Barn</h1>
                </div>
            </nav>
            <div className="rowC">
                <AddBook />
                <GetBooks />
            </div>
         
    </div>
  );
}

export default App;
