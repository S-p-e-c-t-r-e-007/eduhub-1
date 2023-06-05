const addpostform = document.getElementById("add-post-form"),
    posttitle = document.getElementById("title-input"),
    postcontent = document.getElementById("user-text"), postcontainer = document.getElementById("post-container");

class posts {
    constructor(id, title, content) {
        this.id = id,
            this.title = title,
            this.content = content;
    }
};


postcontent.addEventListener("keyup",function(e)
{
    e.preventDefault();
    addpost3();
}
);
addpostform.addEventListener("submit", addpost3);



function saveposttolocalstorage() {
    localStorage.setItem("posts", posts);
    /* localStorage.getItem("posts", posts); */
}

/* 
function addpost() {
    const title = posttitle.value;
    const content = postcontent.value;
    console.log(title);
    console.log(content);
    posts.id = Date.now();
    posts.title = posttitle.value;
    posts.content = postcontent.value;
    saveposttolocalstorage();

}


function addpost2() {
    const title = posttitle.value;
    const content = postcontent.value;
    posts.title = title;
    posts.content = content;
    JSON.stringify(posts.id);
    JSON.stringify(posts.content);
    JSON.stringify(posts);
    localStorage.setItem("posts", posts);
    console.log(title);
}

 */





function addpost3(event) {
    event.preventDefault();
    const title = posttitle.value;
    const content = postcontent.value;
    JSON.stringify(title);
    const newpost = new posts(Date.now(), title, content);
    localStorage.setItem("newposts", JSON.stringify(newpost));
    loadpostsfromlocalstorage();
    

    function loadpostsfromlocalstorage() {/* 
        const getposts = localStorage.getItem("newposts", JSON.parse(newpost));
        const title = getposts.newpost.title;
        const content = getposts.newpost.content; */
        const dynamicpost = document.createElement("div");
        dynamicpost.innerHTML = `
        <div id="feedbar">
        <div id="stat-add-post">
                <div id="title">
                    <div id="title-input">${newpost.title}</div>
                </div>
                <div class="feed-bar-text">
                    <div id="user-text">${newpost.content}</div>
                </div>
        `;
        posttitle.innerHTML = "";
        postcontent.innerHTML = "";

        postcontainer.appendChild(dynamicpost);

    }
}

/* 
const postadd = localStorage.getItem('location'),
posts = [],
postss = localStorage.getItem('postss');
postsParsed = JSON.parse(posts);
postsParsed.push(postadd);
localStorage.setItem('postss', JSON.stringify(postsParsed)); */


/* 
function loadpostsfromlocalstorage() {
    const getposts = localStorage.getItem("newposts", JSON.parse(newpost));

    const title = getposts.newpost.title;
    const content = getposts.newpost.content;

    const dynamicpost = document.createElement("div");
    dynamicpost.innerHTML = `
    <div id="feedbar">
    <div id="stat-add-post">
            <div id="title">
                <div id="title-input">${title}</div>
            </div>
            <div class="feed-bar-text">
                <div id="user-text">${content}</div>
            </div>
    `;

    postcontainer.appendChild(dynamicpost);

} */