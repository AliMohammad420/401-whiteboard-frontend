import { createContext, useContext, useState } from "react";
import axios from "axios";
import React from 'react';
import cookies from 'react-cookies';
import { useAuth } from "./AuthContext";

const UserDataContext = createContext();
export const useUserData = () => useContext( UserDataContext );

const UserDataContextProvider = ( props ) => {
    const [ post, setPost ] = useState( [] );
    const [ edit, setEdit ] = useState( false );
    const { user } = useAuth();


    const fetchData = async () => {
        try {
            const response = await axios.get( `${process.env.REACT_APP_HEROKU_URL}/post` );
            setPost( response.data );
        } catch ( error ) {
            console.log( error );
        }
    };


    
    const addPost = async ( e ) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value
        };
        await axios.post( `${process.env.REACT_APP_HEROKU_URL}/post`, post, {
            headers: {
                Authorization: `Bearer ${cookies.load( 'token' )}`
            }
        } ).then( ( res ) => {
            fetchData();
        } ).catch( ( err ) => {
            console.log( err );
        } );
    };
    
    const editPost = async ( e, id ) => {
        e.preventDefault();
        let title = e.target.title.value;
        let content = e.target.content.value;
        let obj = {
            title,
            content
        };
        await axios.put( `${process.env.REACT_APP_HEROKU_URL}/post/${id}/${user.user_id}`, obj, {
            headers: {
                'Authorization': `Bearer ${cookies.load( 'token' )}`
            }
        } );
        setEdit( false );
        fetchData();
    };

    const deletePost = async ( id ) => {
        let confirm = prompt( "Please type delete" );
        if ( confirm === "delete" ) {
            await axios.delete( `${process.env.REACT_APP_HEROKU_URL}/post/${id}/${user.user_id}`, {
                headers: {
                    'Authorization': `Bearer ${cookies.load( 'token' )}`
                }
            } );
            fetchData();
        } else deletePost();
    };

    const addComment = async ( e, postId ) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
        };
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/comment/${postId}/${user.user_id}`,
            comment
        ).then( () => {
            console.log( 'comment added' );
        } );
    };

    const state = {
        post,
        setPost,
        edit,
        setEdit,
        fetchData,
        addPost,
        editPost,
        deletePost,
        addComment,
    };

    return (
        <UserDataContext.Provider value={state}>
            {props.children}
        </UserDataContext.Provider>
    );
};

export default UserDataContextProvider;