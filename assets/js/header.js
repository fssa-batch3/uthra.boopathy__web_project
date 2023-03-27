let origin = window.location.origin;
let logo_path = origin + "/pages/homepage/frontpage.html";
let logo = origin + "/assets/images/logo.png";
let cart = origin + "/pages/orders/cartpage.html";
let wishlist = origin + "/pages/orders/wishlistpage.html";
let orders = origin + "/pages/orders/myorderspage.html";
let profile = origin + "/pages/homepage/profile.html";
let login = origin + "/pages/homepage/loginpage.html";

let before_login = 
`
<a href= "${logo_path}"> <img class="logo" src= "${logo}" alt="logo" /> </a>
<h1> Thara's World </h1>
  <div class="nav">
     <ul>
        <li> <a href= "${cart}"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a></li>
        <li> <a href= "${wishlist}"><i class="fa-sharp fa-solid fa-heart"></i></a></li> 
        <li><a href= "${orders}"><i class="fa-solid fa-bag-shopping"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-bell"></i></i></a></li>
        <li><a href= "${profile}"><i class="fa-solid fa-circle-user"></i></a></li>
        <li> <a href= "${login}"><span class="login"> Login </span> </a></li>
      </ul>
  </div>

  <div class="menu">
    
    <i class="fa-solid fa-bars"></i>               
     <div class="menu-list">
        
            <a href= "${cart}"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
            <a href= "${wishlist}"><i class="fa-sharp fa-solid fa-heart"></i></a>
            <a href= "${orders}"><i class="fa-solid fa-bag-shopping"></i></a>
            <a href="#"><i class="fa-solid fa-bell"></i></i></a>
            <a href= "${profile}"><i class="fa-solid fa-circle-user"></i></a>
            <a href= "${login}"><span class="login"> Login </span> </a>
    
     </div>
 </div>

`;

let after_login = 
`
<a href= "${logo_path}"> <img class="logo" src="${logo}" alt="logo" /> </a>
<h1> Thara's World </h1>
  <div class="nav">
     <ul>
        <li> <a href= "${cart}"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a></li>
        <li> <a href= "${wishlist}"><i class="fa-sharp fa-solid fa-heart"></i></a></li> 
        <li><a href= "${orders}"><i class="fa-solid fa-bag-shopping"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-bell"></i></i></a></li>
        <li><a href= "${profile}"><i class="fa-solid fa-circle-user"></i></a></li>
        <li> <span class="login"> Log out </span> </li>
      </ul>
  </div>

  <div class="menu">
    
    <i class="fa-solid fa-bars"></i>               
     <div class="menu-list">
        
            <a href= "${cart}"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
            <a href= "${wishlist}"><i class="fa-sharp fa-solid fa-heart"></i></a>
            <a href= "${orders}"><i class="fa-solid fa-bag-shopping"></i></a>
            <a href="#"><i class="fa-solid fa-bell"></i></i></a>
            <a href= "${profile}"><i class="fa-solid fa-circle-user"></i></a>
            <span class="login"> Log out </span> 
    
     </div>
 </div>

`;


function header() {


let userId = JSON.parse(localStorage.getItem("uniqueID"));
let userlogin = document.getElementById("userLogin");

if (!userId) {
userlogin.innerHTML = before_login;
}
else {
userlogin.innerHTML = after_login;
}


}


function logout() {

    alert (confirm("Are you sure to log out?"));

    window.location.href = "${login}";

}
