import React, { useEffect, useState } from 'react';
import { Post as InterfacePost } from './main';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { addDoc, getDocs, collection, query, where, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    post: InterfacePost;
};

interface Like {
    userId: string;
    likeId : string;
};

const Post = (props: Props) => {
  const { post } = props;

  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, 'likes');

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((doc) => { return (
            { 
                userId: doc.data().userId,
                likeId: doc.id}
        );
    }));
    // console.log(data.docs.map((doc) => { return ({...doc.data(), id: doc.id})}));
    // console.log(data.docs.length);
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid); // looping through an array 

  useEffect(() => {
    getLikes();
  }, []);

  const addLike = async() => {
    try {
        const newDoc = await addDoc(likesRef, { userId: user?.uid, postId: post.id });
        if (user) {
            setLikes((prev) => 
                prev 
                    ? [...prev, {userId: user.uid, likeId: newDoc.id }]
                    : [{ userId: user?.uid, likeId: newDoc.id }]);
        };
    }
    catch (error) {
        console.log(error);
    };
  };

  const removeLike = async() => {
    try {
        const likeToDeleteQuery = query(likesRef, 
            where("postId", "==", post.id),
            where("userId", "==", user?.uid),
        );

        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        const likeId = likeToDeleteData.docs[0].id;
        const likeToDelete = doc(db, "likes", likeId);

        await deleteDoc(likeToDelete);

        if (user) {
            setLikes((prev) => 
                prev && prev.filter((like) => like.likeId !== likeId)
            );
        };
    }
    catch (error) {
        console.log(error);
    };
  };

  return (
    <div>
        <div className='title'>
            <h1>{post.title}</h1>
        </div>
        <div className='body'>
            <p>{post.description}</p>
        </div>
        <div className='footer'>
            <p>@{post.username}</p>
            <button onClick={hasUserLiked ? removeLike : addLike}>
                {hasUserLiked ? 
                    (<AiFillDislike/>) :
                    (<AiFillLike/>) 
                } 
            </button>
            {likes && <p>Likes : {likes?.length}</p>}
        </div>
    </div>
  );
};

export default Post;
