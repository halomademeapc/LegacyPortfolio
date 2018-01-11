// JavaScript Document

$('#alltoggle').click(function() {
	enableVisibility($(".course,.work,.volunteer"));
	//$('.course').slideDown();
	//$('.work').slideDown();
	//$('.volunteer').slideDown();
	updateVisiblity($(".course,.work,.volunteer"));
});

$('#worktoggle').click(function() {
	disableVisibility($(".course,.volunteer"));
	enableVisibility($(".work"));
	//$('.course').slideUp();
	//$('.volunteer').slideUp();
	//$('.work').slideDown();
	updateVisiblity($(".course,.work,.volunteer"));
});

$('#schooltoggle').click(function() {
	disableVisibility($(".work,.volunteer"));
	enableVisibility($(".course"));
	//$('.work').slideUp();
	//$('.volunteer').slideUp();
	//$('.course').slideDown();
	updateVisiblity($(".course,.work,.volunteer"));
});

$('#othertoggle').click(function() {
	disableVisibility($(".course,.work"));
	enableVisibility($(".volunteer"));
	//$('.course').slideUp();
	//$('.work').slideUp();
	//$('.volunteer').slideDown();
	updateVisiblity($(".course,.work,.volunteer"));
});

function disableVisibility(elements) {
    //console.log("resetting visibility");
    elements.data("filtered", true);
    return;
}

function enableVisibility(elements) {
    elements.data("filtered", false);
    return;
}

$(document).ready(function() {
	var expItems = $(".work,.course,.volunteer");

	enableVisibility(expItems);
});

function updateVisiblity(elements) {
    elements.each(function () {
        if ($(this).data("filtered") == true) {
            $(this).slideUp();
        }
        else {
            $(this).slideDown();
        }
    });
    return;
}