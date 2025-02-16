// -----------------All Selectors-----------------------------

let allProduct = document.querySelector(".all_product");
let allProductList = document.querySelector(".all_product_list");
let signIn = document.querySelector(".signIn");
let signupbutton = document.querySelector(".btn");
let signupPopup = document.querySelector(".signup_popup");
let loginDetail = document.querySelector(".logindetail");
let navigationInputField = document.querySelector(".navigation_inputfiled");
let firstNavMenu = document.querySelector(".frist_nav_menubar");
let shadow = document.querySelector(".shadow");
let sidebar = document.querySelector(".side_bar");
let sideBarCloseBtn = document.querySelector(".sidebar_close_btn");
let secondMenuBar = document.querySelector(".second_menu_bar");
let secondSignIn = document.querySelector(".second_signIn");
let secondpopup = document.querySelector(".second_signup_popup");
let signUppopupClosebtn = document.querySelector(".signup_popup_closebtn");
// ----------------Navigation Bar starts------------------------

navigationInputField.addEventListener("click", function (event) {
  event.stopPropagation();
  navigationInputField.classList.add("navigation_inputfield_active");
});
allProduct.addEventListener("click", function (event) {
  event.stopPropagation();
  if (allProductList.classList.contains("all_list_product_active")) {
    allProductList.classList.remove("all_list_product_active");
  } else {
    allProductList.classList.add("all_list_product_active");
  }
});
allProductList.addEventListener("click", function (event) {
  event.stopPropagation();
});

signupbutton.addEventListener("click", function (event) {
  event.stopPropagation();
  signupPopup.classList.add("signup_popup_active");
  shadow.classList.add("active_shadow");
  loginDetail.classList.remove("signin_active");
});

signupPopup.addEventListener("click", function (event) {
  event.stopPropagation();
});
loginDetail.addEventListener("click", function (event) {
  event.stopPropagation();
});
document.addEventListener("click", function () {
  loginDetail.classList.remove("signin_active");
  signupPopup.classList.remove("signup_popup_active");
  allProductList.classList.remove("all_list_product_active");
  navigationInputField.classList.remove("navigation_inputfield_active");
  shadow.classList.remove("active_shadow");
  sidebar.classList.remove("side_bar_active");
  secondpopup.classList.remove("second_signup_popup_active");
});

signIn.addEventListener("click", function (event) {
  event.stopPropagation();
  if (loginDetail.classList.contains("signin_active")) {
    loginDetail.classList.remove("signin_active");
  } else {
    loginDetail.classList.add("signin_active");
  }
});
// ----------sideBar functionalities----------------
sidebar.addEventListener("click", function (event) {
  event.stopPropagation();
});
firstNavMenu.addEventListener("click", function (event) {
  event.stopPropagation();
  sidebar.classList.add("side_bar_active");
  shadow.classList.add("active_shadow");
});
sideBarCloseBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  sidebar.classList.remove("side_bar_active");
  shadow.classList.remove("active_shadow");
});

secondMenuBar.addEventListener("click", function (event) {
  event.stopPropagation();
  sidebar.classList.add("side_bar_active");
  shadow.classList.add("active_shadow");
});

secondSignIn.addEventListener("click", function (event) {
  event.stopPropagation();
  secondpopup.classList.add("second_signup_popup_active");
  shadow.classList.add("active_shadow");
});
secondpopup.addEventListener("click", function (event) {
  event.stopPropagation();
});
signUppopupClosebtn.addEventListener("click", function (event) {
  event.stopPropagation();
  secondpopup.classList.remove("second_signup_popup_active");
  shadow.classList.remove("active_shadow");
});

// ---------------------Navigation Bar End-------------------------


// ---------adding functionality to carousal-----------

let images=document.querySelectorAll(".image")
let imgDivHolder=document.querySelector(".image_items")