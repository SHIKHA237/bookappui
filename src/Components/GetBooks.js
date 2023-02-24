// JavaScript source code
import React, { useEffect, useState } from "react";

const GetAllBooks = () => {
    const [disabled, setDisabled] = useState(true);
    const [hide, setHide] = useState(true);
    const [show, setShow] = useState(false);


    const [posts, setPosts] = useState([]);
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');

    const [isbn, setisbn] = useState('');
    useEffect(() => {
        fetch("https://localhost:7252/api/GetBooks")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
                
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


   

    const updateBooksDetails = async (id) => {
        await fetch("https://localhost:7252/api/UpdateBook?id=" + id, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                author: author,
                isbn: isbn
            }),

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => { console.log("response" + response); })
            .catch((err) => { console.log(err.message); })
    };

    const deletePost = async (id) => {
        await fetch("https://localhost:7252/api/DeleteBook?id=" + id, {
            method: 'DELETE',
        }).then((response) => {
            if (response.status === 200) {
                setPosts(
                    posts.filter((post) => {
                        return post.id !== id;
                    })
                );
            } else {
                return;
            }
        });
    };


    const handleEditClik = () => {
        setDisabled(!disabled);
        setHide(!hide);
        setShow(hide);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(!hide);
        updateBooksDetails(title, author, isbn);
        window.location.reload();
    };

    return (     
        <div className="container h-100 d-flex justify-content-end" style={{ paddingTop: "60px", paddingRight:"150px", maxHeight: "450px" }}>
            <div className="card bg-light" style={{ width: "25rem", overflowY: "scroll" }}>
                <div className="card-body">
                    <div class="card-header">
                        <h2>Books</h2>
                        </div>
                    {posts.map((post) => {
                                return (
                                    <div style={{ paddingTop: "5px" }}>
                                        <div className="card" style={{ width: "22rem", backgroundColor: "lightgrey" }}>
                                            <div class="card-body">
                                                <div key={post.id}>
                                                    <form className="form-group" onSubmit={handleSubmit}>
                                                        <div className="field m-3">
                                                            <label><b>Title</b></label>

                                                            <input type="text" className="form-control" required value={!title.match(post.title) || title === null ? post.title : title} disabled={disabled} onChange={(e) => settitle(e.target.value)} ></input>
                                                        </div>
                                                        <div className="field  m-3">
                                                            <label><b>Author </b></label>
                                                            <input type="text" className="form-control" required value={!author.match(post.author) || author === null ? post.author : author} disabled={disabled} onChange={(e) => setauthor(e.target.value)}></input>
                                                        </div>
                                                        <div className="field  m-3">
                                                            <label><b>ISBN</b> </label>
                                                            <input type="text" className="form-control" required value={!isbn.match(post.isbn) || isbn === null ? post.isbn : isbn} disabled={disabled} onChange={(e) => setisbn(e.target.value)}></input>
                                                        </div>
                                                       
                                                    </form>
                                                    {/*<h6 class="card-text">Title : {post.title}</h6>*/}
                                                    {/*<h6 class="card-text">Author : {post.author}</h6>*/}
                                                    {/*<h6 class="card-text">ISBN : {post.isbn}</h6>*/}
                                                    <div className="row justify-content-md-center">
                                                        <div className="col col-lg-1">
                                                            <button onClick={handleEditClik} type="submit" className="btn btn-danger" hidden={show}>Edit</button>
                                                        </div>
                                                        <div className="col col-lg-3">
                                                            <button onClick={() => updateBooksDetails(post.id)} type="submit" className="btn btn-danger" hidden={hide}>Save</button>
                                                        </div>
                                                        <div className="col col-lg-4">
                                                            <button onClick={() => deletePost(post.id)} type="submit" className="btn btn-danger" >Delete</button>
                                                        </div>
                                                    </div>
                                             </div>
                                            </div>
                                        </div>
                                    </div>
                                    )  
                            })}
                    </div>
                
                </div>
        </div>
        );
}

export default GetAllBooks;