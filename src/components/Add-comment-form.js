import axios from "axios";
import React from 'react';
import cookies from "react-cookies";


function AddCommentForm ( props ) {
    const handleComment = async ( e ) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
            'post': props.postId,
            'user': cookies.load( 'user' ).id
            
        };
        
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/comment/${props.postId}`,comment).then( () => {
            props.getData();
        } );
    };
    
    return (
        <>
            <div className="add-comment-form">
                <h2>Comment Something :)</h2>
                <form onSubmit={handleComment}>
                    <div className="form-control">
                        <textarea placeholder="Add Comment content" name="content"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCommentForm;