const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <img class="wd-float-left ms-1 wd-avatar" src="${who.avatarIcon}" alt="" width="60px" height="60px">
        <div class="wd-float-left">
            <b><span class="wd-title1"> ${who.userName} <i class="fa-solid fa-circle-check"></i></span> </b>
            <div class="wd-handle1">@${who.handle}</div>
        </div>
        <button class="btn btn-primary wd-float-right override-fs mt-2">follow</button>
    </li>
    `)
}

export default WhoToFollowListItem;