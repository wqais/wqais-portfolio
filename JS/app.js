// let linkedin_img = document.querySelector('#linkedin-img');

// linkedin_img.addEventListener("mouseover", linkedin_hover)
// function linkedin_hover(){
//     linkedin_img.src = "/Assets/linkedin-blue.svg";
// }

function linkedin_hover(x, image){
    if(x ==1){
        image.src = "/Assets/linkedin-blue.svg"
    }
    else if(x == 2){
        image.src = "/Assets/linkedin-black.svg"
    }
}

function instagram_hover(x, image){
    if(x ==1){
        image.src = "/Assets/instagram-blue.svg"
    }
    else if(x == 2){
        image.src = "/Assets/instagram-black.svg"
    }
}

function github_hover(x, image){
    if(x ==1){
        image.src = "/Assets/github-blue.svg"
    }
    else if(x == 2){
        image.src = "/Assets/github-black.svg"
    }
}

function twitter_hover(x, image){
    if(x ==1){
        image.src = "/Assets/twitter-blue.svg"
    }
    else if(x == 2){
        image.src = "/Assets/twitter-black.svg"
    }
}