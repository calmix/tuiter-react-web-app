import React from "react";
import StatsItem from "../tuit-stats/tuit-stats-item";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../tuits-reducer";

const TuitItem = (
    {
        post = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "Tesla_T_symbol.svg.png",
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
          }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(

        <div className="row home-screen-border-style p-1">
            <div className="col-1">
            <img className="wd-avatar" src={`/images/${post.image}`} alt="" width="48px" height="48px"/>
            </div>
            <div className="col-11 p-3">
                <b><span className="wd-title1">{post.userName}</span></b>
                <span className="wd-handle1">@{post.handle} · {post.time}</span>
                <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(post._id)}></i>
                <p className="wd-main-content">{post.tuit}</p>
                <StatsItem key={post._id} post={post}/>
            </div>
            
        </div>
    );
};
export default TuitItem;