

function checkValue(){
    const data= document.demoForm.uname.value
    if(data==""){
        document.getElementById('show').innerHTML='Name cannot be blank.'
        console.log("data should be present")
    }
    else{
        console.log(data)
    }
}


function printMessage(){
    document.getElementById('show').innerHTML = "Sale!"
}