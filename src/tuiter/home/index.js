import React from "react";
import posts from './posts.json'
import PostListItem from "./post-list-item";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PostList = () => {
    return(
    <div class=" p-3">
        {
        posts.map(post => <PostListItem key={post._id} post={post}/>)
    }
    </div> 
    );
};
export default PostList;