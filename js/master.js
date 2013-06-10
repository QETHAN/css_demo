$(document).ready(function() {
	var queryhash = window.location.hash
	switch (queryhash) {
		case "#about":
			document.title = "QETHAN - About";
			initialShowAbout();
			break;
		case "#contact":
			document.title = "QETHAN - Contact";
			initialShowContact();
			break;
		case "#networks":
			document.title = "QETHAN - Networks";
			initialShowNetworks();
			break;
		default:
			initialShowNetworks();
			break;
	}
	$("h2").hide();
	$("#vcard a").hover(showVcardLabel, hideVcardLabel);
	$("#nav-about a").click(showAbout);
	$("#nav-networks a").click(showNetworks);
	$("#nav-contact a").click(showContact);
});

function showVcardLabel() {
	$("#vcard a span").show();
	$("#vcard a span").animate({
		top: "-40px",
		opacity: 1
	}, 250 );
}

function hideVcardLabel() {
	$("#vcard a span").animate({ 
		top: "-35px",
		opacity: 0
	}, 250 );
	setTimeout("$('#vcard a span').hide();", 250);
	$("#vcard a span").animate({ 
		top: "-45px",
	}, 250 );
}

function initialShowNetworks() {
	$("#content").hide();
	$("#QETHAN").removeClass();
	$("#QETHAN").addClass("networks");
	$(".node").hide();
	$("#networks").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function initialShowAbout() {
	$("#content").hide();
	$("#QETHAN").removeClass();
	$("#QETHAN").addClass("about");
	$(".node").hide();
	$("#about").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function initialShowContact() {
	$("#content").hide();
	$("#QETHAN").removeClass();
	$("#QETHAN").addClass("contact");
	$(".node").hide();
	$("#contact").show();
	setTimeout("$('#content').slideDown('slow');", 1000);
}

function showAbout() {
	if ($("#QETHAN").hasClass("about")){ }
	else {
		document.title = "QETHAN - About";
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#about').show();", 500);
		$("#content").slideDown(500);
		$("#QETHAN").removeClass();
		$("#QETHAN").addClass("about");
	}
}

function showNetworks() {
	document.title = "QETHAN - Networks";
	if ($("#QETHAN").hasClass("networks")){ }
	else {
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#networks').show();", 500);
		$("#content").slideDown(500);
		$("#QETHAN").removeClass();
		$("#QETHAN").addClass("networks");
	}
}

function showContact() {
	if ($("#QETHAN").hasClass("contact")){ }
	else {
		document.title = "QETHAN - Contact";
		$("#content").slideUp(500);
		$(".node").fadeOut(500);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#contact').show();", 500);
		$("#content").slideDown(500);
		$("#QETHAN").removeClass();
		$("#QETHAN").addClass("contact");
	}
}