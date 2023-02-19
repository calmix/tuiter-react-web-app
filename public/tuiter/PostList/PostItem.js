const PostItem = (post) => {
    return(`
    <div class="home-screen-border-style"> 
        <img class="wd-avatar wd-float-left" src="${post.icon}" alt="" width="48px" height="48px">
        <div class="wd-float-left">
            <br>
            <b><span class="wd-title1">${post.userName}</span></b>
            <span class="wd-handle1">@${post.handle} ${post.time}</span>
            <p class="wd-main-content">${post.content}</p>
            <div class="wd-content-block">
                <img class="wd-content-image" src="${post.img}" alt="" width="100%" height="auto">
                <div class="wd-content p-2">
                    <b><p class="wd-content-title">${post.title}</p></b>
                    <p class="wd-content-text">${post.linkContent}</p>
                    <p class="wd-content-text"><i class="fa-solid fa-link"></i>${post.source}</p>
                </div>
            </div>
            <div class="wd-icons">
                <a class="wd-link-style wd-other-icon" href="#"><i class="fa-regular fa-comment"></i>&nbsp&nbsp${post.commentNumber}</a>
                <a class="wd-link-style wd-other-icon" href="#"><i class="fa-solid fa-retweet"></i>&nbsp&nbsp${post.retweetNumber}</a>
                <a class="wd-link-style wd-other-icon" href="#"><i class="fa-regular fa-heart"></i>&nbsp&nbsp${post.likeNumber}</a>
                <a class="wd-link-style wd-other-icon" href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
            </div>

            
        </div>
        

        <div class="wd-float-done"></div>
        
    </div>    
    `)
}

export default PostItem;