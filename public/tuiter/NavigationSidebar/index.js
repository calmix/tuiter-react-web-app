const NavigationSidebar = (active) => {
    return(`
    <div class="list-group mb-1">
        <a class="list-group-item"><i class="fab fa-twitter fa-2x"></i></li>
        <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html"><i class="fa-solid fa-house-chimney"></i><span class="d-none d-xl-inline"> Home</span></a>
        <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../explore/index.html"><i class="fa-solid fa-hashtag" ></i><span class="d-none d-xl-inline"> Explore</span></a>
        <a class="list-group-item ${active === 'notifications' ? 'active' : ''}"><i class="fa-solid fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span></a>
        <a class="list-group-item ${active === 'messages' ? 'active' : ''}""><i class="fa-solid fa-envelope"></i><span class="d-none d-xl-inline"> Messages</span></a>
        <a class="list-group-item ${active === 'bookmarks' ? 'active' : ''}""><i class="fa-solid fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span></a>
        <a class="list-group-item ${active === 'lists' ? 'active' : ''}""><i class="fa-solid fa-list"></i><span class="d-none d-xl-inline"> Lists</span></a>
        <a class="list-group-item ${active === 'profile' ? 'active' : ''}""><i class="fa-solid fa-user"></i><span class="d-none d-xl-inline"> Profile</span></a>
        <a class="list-group-item ${active === 'more' ? 'active' : ''}""><i class="fa-solid fa-caret-down"></i><span class="d-none d-xl-inline"> More</span></a>
    </div>
    <button class="btn btn-primary override-bs">Tweet</button>
    `);
}
export default NavigationSidebar;