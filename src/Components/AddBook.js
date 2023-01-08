// JavaScript source code
import React, { useEffect, useState } from "react";

const Addbook = () => {
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [isbn, setisbn] = useState('');

    const addBooksDetails = async (title, author, isbn) => {
        await fetch("https://localhost:7252/api/CreateBook")
    };


    return (
        <div>
            <div className="ui main">
                <div className="ui container center">
                <h2>Add Books</h2>
                <form classname="ui form">
                    <div className="field">
                    <label>Title </label>
                    <input type="text" name="title"></input>
                    </div>
                    <div className="field">
                        <label>Author </label>
                        <input type="text" name="author"></input>
                    </div>
                    <div className="field">
                        <label>ISBN </label>
                        <input type="text" name="isbn"></input>
                        </div>
                        <div className="field">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
}

export default Addbook;