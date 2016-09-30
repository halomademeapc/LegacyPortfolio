// JavaScript Document

$('#alltoggle').click(function() {
	$('.course').slideDown();
	$('.work').slideDown();
	$('.volunteer').slideDown();
});

$('#worktoggle').click(function() {
	$('.course').slideUp();
	$('.work').slideDown();
	$('.volunteer').slideUp();
});

$('#schooltoggle').click(function() {
	$('.course').slideDown();
	$('.work').slideUp();
	$('.volunteer').slideUp();
});

$('#othertoggle').click(function() {
	$('.course').slideUp();
	$('.work').slideUp();
	$('.volunteer').slideDown();
});