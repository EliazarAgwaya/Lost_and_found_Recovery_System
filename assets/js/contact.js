var nameEl=document.getElementById("name");
var emailEl=document.getElementById("email");
var textaEl=document.getElementById("message");
var checkEl=document.getElementById("check");
var btnEl=document.getElementById("submit");

btnEl.addEventListener("click", (e)=>{
    if(nameEl.value=='' || emailEl.value=='' || textaEl.value=='' )
    {
        alert("Please fill the fields");
    }
    else if(checkEl.checked){
        alert("Submitted Successfully");


    }
    else{
        alert("Submitted Successfully");
    }
})