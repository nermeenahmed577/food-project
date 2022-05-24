let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}


/*const inputs =Document.querySelectorAll('input');
const patterns ={

  phonenumber: /^\d{11}$,
  firstname:/^[a-z\d]{5-12}$/i,
  lasttname:/^[a-z\d]{5-12}$/i,
  email:/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/,
  address:/[a-zA-Z0-9\s,'-]*$/,
  password:/^[A-Z]+(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).

};
function validate(field , regex)
{
  if(regex.test(field.value)){
  field.className="valid"
}
else
{
  field.className="invalid"
}

}

inputs.forEach((input)=>{
  input.addEventListener('keyup',(e)=>){
      validate(e.target,patterns[e.target.getAttribute('name')])
       })
})

*/

window.onload=pageLoad;
function pageLoad(){
  var form =document.getElementById("form");
  form.onsubmit=validate;
}



function validate(){
var check=true;
var fname=document.getElementById("firstname").value;
var lname=document.getElementById("lastname").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var phone=document.getElementById("phone").value;
var your=document.getElementById("your").value;



if(fname == "")
{

  alert ('Frist name is required');
  check=false;
  return check;
}
if(!fname.match(/^[A-Za-z]+$/))
{
alert("only letters or space allowed in name fild");
check=false;
  return check;
}



if(lname == "")
{

  alert ('Last name is required');
  check=false;
  return check;
}
if(!lname.match(/^[A-Za-z]+$/))
{
alert("only letters or space allowed in name fild");
check=false;
  return check;
}

if(phone == "")
{
  alert ('phone is required');
  check=false;
  return check;
}
if(!phone.match(/^[0-9]{11}$/))
{
alert("phone is not valid");
check=false;
  return check;
}


if(email == "")
{
  alert ('Email is required');
  check=false;
  return check;
}
if(!email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/))
{
alert("Email is not valid");
check=false;
  return check;
}


if(password == "")
{
  alert ('password is required');
  check=false;
  return check;
}

if(!password.match(/^(?=.*\d)(?!.* )(?=.*[a-z])(?=.*[A-z]{1}).{8}/))
{
alert("password is not valid ,it must contain 8 characters: one_uppercase , one_lowercase, one_number , one special character at least ");
check=false;
  return check;
}


if(your== "")
{
  alert ('Your order is required');
  check=false;
  return check;
}


if (check==true){
alert('Thanks'+" "+fname+" "+lname+" "+'for join to us');
window.location.href='food.html';

}
return check;



}
/*window.onload=pageLoad;
function pageLoad()
{
  var form = document.getElementById("form");
  form.onsubmit = validate;
}



function validate()
{

   var check =true;
   var fname =document.getElementById("fname").value;
   var lname =document.getElementById("lname").value;
   var email =document.getElementById("email").value;
   var phone =document.getElementById("phone").value;
   var password = document.getElementById("password").value;


  if(fname == "")
  {
  alert('First-Name is required !');
  check = false ;
  return check;
  }


  if(!fname.match(/^[A-Za-Z]+$/))
  {
  alert("only letter or space allowed in name sield");
  check = false ;
  return check;
  }



  if(lname == "")
  {
  alert('Last-Name is required !');
  check = false ;
  return check;
  }


  if(!lname.match(/^[A-Za-Z]+$/))
  {
  alert("only letter or space allowed in name sield");
  check = false ;
  return check;
  }


  if(password =="")
  {
  alert('Passworrd is required !');
  check = false ;
  return check;
  }

if(!password.match(/^(?=.*\d)(?!.*) (?=.*[a-z]) (?=.*[A-Z]{1}) .{8}/))
{
  alert("Password is Not valide, It must contain 8 characters : 1 uppercase, 1 lowercase, 1 number and 1 special character at Least");
  check = false ;
  return check;
}


  if(email == "")
  {
  alert('E-mail is required !');
  check = false ;
  return check;
  }



  if(!email.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
  alert("Email is Not valid");
  check =false;
  return check;
  }



  if(phone == "")
  {
  alert('phone is required !');
  check = false ;
  return check;
  }

  if(!phone.match(/^[0-9]{11}$/))
  {
  alert("phone is valid");
  check = false ;
  return check;
  }


  if(check == true)
  {
  alert('Thankes'+fname+""+lname+'for your order');
  window.location.href='index.html';
  }
  return check;

}*/







window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

 if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();