function myFunction(){
    var dot=document.getElementById("dots");
    var moreText=document.getElementById("more");
    var btnText=document.getElementById("myBtn")

    if(dots.style.display === "none"){
        dots.style.display="inline";
        btnText.innerHTML="Learn more";
        moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        btnText.innerHTML="Let it be less";
        moreText.style.display="inline";
    }

}