var fname = document.getElementsByName("firstname")
var pass = document.getElementsByName("pass")
var cpass = document.getElementsByName("cpass")

function validateform(){
    if(fname= null || "" ){
        alert("You must enter a name")
    }
    if(pass != cpass){
        alert("Enter valid password")
    }
}