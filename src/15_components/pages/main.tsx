import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import Post from './post';

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
};

const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, 'posts');

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        // console.log(data);
        // console.log(data.docs);
        // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        setPostsList(
            data.docs.map((doc) => {
                return (
                    { ...doc.data(), id: doc.id}
                )
            }) as Post[]
        );
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {postsList?.map((post, index) => {
                return (
                    <Post 
                        key={index}
                        post={post} 
                    />
                )
            })}
        </div>
    );
}; 

export default Main;
