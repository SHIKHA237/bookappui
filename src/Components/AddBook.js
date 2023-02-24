// JavaScript source code
import React, { useState } from "react";
import GetBooks from './GetBooks';

const Addbook = () => {
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [isbn, setisbn] = useState('');

    const addBooksDetails =  (title, author, isbn) => {
        fetch("https://localhost:7252/api/CreateBook",
            {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    author: author,
                    isbn: isbn
                }),

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => { console.log("response: " + response)})
            .then((data) => {
                //setPosts((posts) => [data, ...posts]);
                settitle((posts) => [data, ...posts]);
            })
            .catch((error) => { console.log(error.message); });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooksDetails(title, author, isbn);
        settitle('');
        setauthor('');
        setisbn('');
        window.location.reload();
    };

    // container h-100 d-flex justify - content - center
    return (
        <div>
            <div className="container h-100 d-flex justify-content-start" style={{ paddingTop: "60px", paddingLeft:"150px" }}>
                <div className="card bg-light" style={{ width: "25rem"}}>
                <div className="card-body">
                    <div class="card-header">
                        <h2>Add Book</h2>
                    </div>
                    <form className="form-group" onSubmit={handleSubmit}>
                    <div className="field m-3">
                         <label><b>Title</b></label>
                                <input type="text" className="form-control" required value={title} onChange={(e) => settitle(e.target.value)}></input>
                    </div>
                     <div className="field  m-3"> 
                         <label><b>Author </b></label>
                                <input type="text" className="form-control" required value={author} onChange={(e) => setauthor(e.target.value)}></input>
                    </div>
                    <div className="field  m-3">
                        <label><b>ISBN</b> </label>
                                <input type="text" className="form-control" required value={isbn} onChange={(e) => setisbn(e.target.value)}></input>
                     </div>
                    <div className="text-center" style={{ paddingTop: "10px" }}>
                                <button type="submit" className="btn btn-secondary" >Submit</button>
                     </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        );
}

export default Addbook;


