import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TuitsList = () => {
    const posts = useSelector((state) => state.tuits);
    return(
    
    <div className=" p-3">
        {
        posts.map(post => <TuitItem key={post._id} post={post}/>)
    }
    </div> 
    );
};
export default TuitsList;