// JavaScript source code
import React, { useEffect, useState } from "react";

const GetAllBooks = () => {
    const [posts, setPosts] = useState([]);
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
    },[]);

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
                                                    <h6 class="card-text">Title : {post.title}</h6>
                                                    <h6 class="card-text">Author : {post.author}</h6>
                                                    <h6 class="card-text">ISBN : {post.isbn}</h6>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-danger">Delete</button>
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