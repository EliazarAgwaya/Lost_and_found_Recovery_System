var nameEl=document.getElementById("name");
var idNo=document.getElementById("idno");
var message=document.getElementById("message");
let submitBtn = document.querySelector(".btn")

function check(){
    var formEl=document.querySelector(".formboard");
    formEl.style.display ="block"
}

submitBtn.addEventListener('click',() => {
    if(nameEl.value == '' || idNo.value == ''){
        alert("please fill all fields")
    }else{
        alert("sent successfully")
    }
})
