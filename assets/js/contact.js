var nameEl=document.getElementById("name");
var emailEl=document.getElementById("email");
var textaEl=document.getElementById("message");
var checkEl=document.getElementById("check");
var btnEl=document.getElementById("submit");

btnEl.addEventListener("click", (e)=>{
    if(nameEl.value=='' || emailEl.value=='' || textaEl.value=='' )
    {
        alert("Please fill all the fields");
    }else{
        let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(emailEl.value.match(emailFormat)){
            alert("Submitted Successfully");
        }else{
            alert('Email not valid')
        }
    }
})
// function validateEmail(){
//     
//     if(emailEl.value != emailFormat){
//         alert('Email not valid')
//     }
//     // }else{
//     //     alert("well done")
//     // }
// }