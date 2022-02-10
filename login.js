function validate()
{
  var username=document.getElementById('name1').value;
  var password=document.getElementById('password1').value;
  if (username=="Brian"&& password=="Admin")

{
    alert("login successful");
    return false;
}  
else
{
    alert("login failed");
}



}