import React from "react";
const PostListItem = (
    {
        post = {
            "icon": '../../images/musk.jpg',
            "userName": 'Elon Musk',
            "handle": 'elonmusk',
            "time": '23h',
            "content": 'Amazing show about @Inspiration mission',
            "title": 'Countdown: Inspiration4 mission to Space | Netflix Officail Site',
            "linkContent": 'From trainning to lauch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civillian orbital space ...',
            "commentNumber": '4.2k',
            "retweetNumber": '3.5k',
            "likeNumber": '37.5k',
            "img": 'inspiration4.jpg',
            "source": 'netflix.com',
        }
    }
) => {
    return(
        <div className="home-screen-border-style p-1"> 
        <img class="wd-avatar wd-float-left" src={`/images/${post.icon}`} alt="" width="48px" height="48px"/>
        <div class="wd-float-left">
            <b><span class="wd-title1">{post.userName}</span></b>
            <span class="wd-handle1">@{post.handle} {post.time}</span>
            <p class="wd-main-content">{post.content}</p>
            <div class="wd-content-block">
                <img class="wd-content-image" src={`/images/${post.img}`} alt="" width="100%" height="auto"/>
                <div class="wd-content p-2">
                    <b><p class="wd-content-title">{post.title}</p></b>
                    <p class="wd-content-text">{post.linkContent}</p>
                    <p class="wd-content-text"><i class="fa-solid fa-link"></i>{post.source}</p>
                </div>
            </div>
            <div class="wd-icons">
                <a class="wd-link-style wd-other-icon" href="#"><i class="bi bi-chat"></i> {post.commentNumber}</a>
                <a class="wd-link-style wd-other-icon" href="#"><i class="bi bi-repeat"></i> {post.retweetNumber}</a>
                <a class="wd-link-style wd-other-icon" href="#"><i class="bi bi-heart"></i> {post.likeNumber}</a>
                <a class="wd-link-style wd-other-icon" href="#"><i class="bi bi-upload"></i></a>
            </div>

            
        </div>
        

        <div class="wd-float-done"></div>
        
    </div>   
    );
};
export default PostListItem;