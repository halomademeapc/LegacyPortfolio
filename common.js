// JavaScript Document

//create navbar
$("#topnavbar").load("navbar.html");
$("#mobilemenu").load("mobilemenu.html");
$("#topnavbar").addClass("borderXwidth navbarback");

$('#burger').click(function () {
    $('#mobilemenu').slideToggle();
});