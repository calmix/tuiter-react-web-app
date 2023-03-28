import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { findTuitsThunk } from "../../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
      }, [])
    return(
    
    <ul className=" p-3">
        {
        loading &&
        <li className="list-group-item">
            Loading...
        </li>
        }
        {
        tuits.map(tuit => <TuitItem key={tuit._id} post={tuit}/>)
        }
    </ul> 
    );
};
export default TuitsList;