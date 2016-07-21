// JavaScript Document
function dummyText() {
    document.getElementById("dummy").innerHTML = "<h2>Lorem ipsum dolor</h2> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><h2>Duis aute</h2> irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Enim in exercitation sed exercitation sit qui occaecat sunt ex velit eiusmod dolor nostrud dolore eu nulla sit nostrud nisi dolore ad quis deserunt anim commodo non culpa ut ex ex aute occaecat sed enim in commodo Lorem laborum. <br><h2>Duis nostrud</h2> anim labore qui eu eu culpa qui ad consectetur sint minim est. Eiusmod eiusmod enim est mollit velit undefined in enim pariatur. ut do eiusmod fugiat eiusmod aliquip sint occaecat id dolore Ut irure nostrud dolor irure officia culpa eiusmod in eiusmod ex laboris ut qui Ut veniam, sunt aute id elit, ipsum voluptate id in ex ipsum dolor est consequat. do elit, sed non veniam, officia t";
}

function scrollHome() {
	window.scroll(0,0); // horizontal and vertical scroll increments
}

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 140;
	var trigger = 0;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
		document.getElementById("header").style.position = "fixed";
		document.getElementById("header").style.top = "-140px";
		//document.getElementById("body_content").style.top = "140px";
    }
	else
	{
		document.getElementById("header").style.position = "relative";
		document.getElementById("header").style.top = "0";
		//document.getElementById("body_content").style.top = "0";
	}
});