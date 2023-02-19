import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div>
        <div class="row">
            <div class="input-icon-container col-11">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search Twitter"/>
            </div>
            <div class="col-1 mt-1">
                <a class="wd-border-right wd-gear-icon-style" href="explore-settings.html"><i class="fa-solid fa-gear fa-2x"></i></a>
            </div>
            
        </div>
        
        <div class="wd-search-bar wd-margin-bottom">
            
            <!-- <input class="wd-bg-color-gray wd-fg-color-white wd-search-bar-rounded" type="text" placeholder="Search Tuiter">
            <a class="wd-border-right wd-gear-icon-style" href="explore-settings.html"><span class="wd-gear-icon-style">&#9881;</span></a> -->
            <!-- <div class="wd-search-container">
                <input class="wd-search-bar-rounded" type="text" placeholder="Search Tuiter">
                
                <span class="wd-search-icon wd-float-left">
                    <i class="fa fa-search"></i>
                </span>
            </div>
            
            <a class="wd-border-right wd-gear-icon-style wd-float-right" href="explore-settings.html"><i class="fa-solid fa-gear fa-2x"></i></a>        
            <div class="wd-float-done"></div> -->
        </div>
        <div class="wd-topbar">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
    </div>
    <br>
    <div class="main-container">
        <img class="" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1" alt="" width="100%" height="auto">
        <b><div class="bottom-left">SpaceX's Starship</div></b>
    </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
