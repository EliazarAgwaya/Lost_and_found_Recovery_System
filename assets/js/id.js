var nameEl=document.getElementById("name");
var idNo=document.getElementById("idno");
var message=document.getElementById("message");

function check(){
    var formEl=document.querySelector(".formboard");
    formEl.style.display ="block"
    if(nameEl.value=""){
        console.log("success");
    }
}
