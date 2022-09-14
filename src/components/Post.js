import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import AddPostForm from "./Add-post-form";
import React from 'react';


function Post (props) {
    const [post, setPost] = useState([]);
    const getData = async () => {
        const dataPost = await axios.get( `https://post-401.herokuapp.com/post`);
        setPost(dataPost.data.post);
    };

    const handleDelete = async ( id ) => {
        await axios.delete( `https://post-401.herokuapp.com/post/${id}` );
        getData();
    };

    useEffect( () => {
        getData();
    }, [props.rerender]);
    return (
        <div>

            <AddPostForm getPosts={getData} updatePosts={handleDelete} />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-4 font-mono gap-x-5 gap-y-8'>

                {post && post.map((post) => {
                    return <post post={post} getPosts={getData} />
                })}
            </div>
        </div>
    );

}
export default Post;