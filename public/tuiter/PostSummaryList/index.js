import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
    <div class="p-3">
    ${
        posts.map(post => {
            return(PostSummaryItem(post));
        })
    }
    </div>
    `)
}

export default PostSummaryList;