import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PostList = () => {
    return(
    // <div class=" p-3">
    //     {
    //     posts.map(post => <PostListItem key={post._id} post={post}/>)
    // }
    // </div> 
    <>
    <h4>Home</h4>
    <WhatsHappening/>
    <TuitsList/>
    </>

    );
};
export default PostList;