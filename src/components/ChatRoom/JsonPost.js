import React, { useState, useEffect} from 'react';


export default function JsonPost() {

    const [listPosts, setListPosts] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee0662074dmshf5917dc14a653d7p1df3c7jsnee03e38968e1',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://moviesdatabase.p.rapidapi.com/titles')
            .then(response => response.json())
            .then(data => setListPosts(data))
            .cath(error => console.log(error));
    }, [] );


    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {listPosts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

