import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
    <div class=" p-3">
    ${
        posts.map(post => {
            return(PostItem(post));
        })
    }
    </div>    
    `)
}

export default PostList;