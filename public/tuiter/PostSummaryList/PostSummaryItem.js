const PostSummaryItem = (post) => {
    return(`
        <div class="col-9 wd-float-left">
            <p class="wd-post-style pt-2">${post.topic}</p>
            <b><p class="mb-1">${post.userName} <i class="fa-solid fa-circle-check"></i></b><span class="wd-post-style"> -${post.time}</span></p>
            <b><p class="">${post.title}</p></b>
        </div>
        <div class="col-3 wd-float-right">
        <img class="wd-margin-right wd-rounded-corners-all-around mx-auto d-block" src="${post.image}"
        height="100px" width="100px"/>
        </div>
        <div class="wd-float-done"></div>

    `)
}

export default PostSummaryItem;