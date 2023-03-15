import React, { useReducer } from "react";

const initialState = {
    liked: false
}

function reducer(state, action) {
    return {...state, liked: action.payload};
}

const StatsItem = (
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
    const [state, dispatch] = useReducer(reducer, {liked: post.liked});
    return (
            <div className="row wd-icons ms-2">
                <a className="col-2 wd-other-icon" href="#"><i className="bi bi-chat"></i> {post.replies}</a>
                <a className="col-2 wd-other-icon" href="#"><i className="bi bi-repeat"></i> {post.retuits}</a>
                <a className="col-2 wd-other-icon" href="#" style={{ color: state.liked ? 'red' : 'black'}}
                onClick={
                    () => {
                        dispatch({payload: !state.liked})
                    }
                }
                ><i className="bi bi-heart"></i> {state.liked? post.likes + 1 : post.likes}</a>
                <a className="col-2 wd-other-icon" href="#"><i className="bi bi-upload"></i></a>
            </div>
    )
}

export default StatsItem;