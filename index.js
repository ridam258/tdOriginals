document.querySelector("#collapsingButton").addEventListener("click",()=>{
    document.querySelector(".collapsedContent").classList.toggle("showContent");
    document.querySelector(".upArrow").classList.toggle("showContent");
    document.querySelector(".moreButton").classList.toggle("hideContent");
});
document.querySelector(".upArrow").addEventListener("click",()=>{
    document.querySelector(".upArrow").classList.toggle("showContent");
    document.querySelector(".moreButton").classList.toggle("hideContent");
    document.querySelector(".collapsedContent").classList.toggle("showContent");

})