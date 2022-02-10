let userForm = document.querySelector("#sign-up-id");
userForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  let userData = new FormData(userForm);


  createAccount(userData);
});

createAccount = (userData)=>{
    window.alert("Success!")
  }
clickFunction = ()=>{
  var x = document.querySelector("#checkbox1");
  let pass = document.querySelector("#myInput")
  if(x.checked) {
    // console.log(pass.type)
    pass.type = "text";
  } else {
    pass.type = "password";
  }
  
}

clickFunction1 = ()=>{
  var y = document.querySelector("#checkbox2");
  let pass1 = document.querySelector("#mySecondInput")
  if (y.checked){
    pass1.type = "text";
  }
  else{
    pass1.type = "password";
  }
}


// If the length of the element's string is 0 then display helper message 
function required(inputtx) 
{
  if (inputtx.value.length == 0)
   { 
      alert("message");  	
      return false; 
   }  	
   return true; 
 } 