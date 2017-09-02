// JavaScript Document

$('#alltoggle').click(function() {
	$('.course').slideDown();
	$('.work').slideDown();
	$('.volunteer').slideDown();
});

$('#worktoggle').click(function() {
	$('.course').slideUp();
	$('.volunteer').slideUp();
	$('.work').slideDown();
});

$('#schooltoggle').click(function() {
	$('.work').slideUp();
	$('.volunteer').slideUp();
	$('.course').slideDown();
});

$('#othertoggle').click(function() {
	$('.course').slideUp();
	$('.work').slideUp();
	$('.volunteer').slideDown();
});