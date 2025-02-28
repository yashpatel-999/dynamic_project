let is_clicked = false;

function onClickLikeButton() {
    if (is_clicked === false) {
        document.getElementById("likeButton").style.backgroundColor = "#2563eb";
        document.getElementById("likeButton").style.color = "#ffffff";
        document.getElementById("likeIcon").src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/liked.png";
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        is_clicked = true;
    } else {
        document.getElementById("likeButton").style.backgroundColor = "#d1d5db";
        document.getElementById("likeButton").style.color = "#4b5563";
        document.getElementById("likeIcon").src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/hit_like.png";
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        is_clicked = false;
    }
}