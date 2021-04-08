// JavaScript Document

$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 800;
 
            //interval between items (in milliseconds)
            var itemInterval = 6000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 1200;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});

// Scrolling Divs

$(document).ready(function() {

					$(function() {
						var previous = "";
						$(window).bind("scroll", function(event) {
							var message = "";
							
							$("body div:in-viewport").each(function(){
								if ($(this).attr("id") != "") {
									if ($(this).attr("id").substring(0,4).toLowerCase() === "page") {
										message += $(this).attr("id") + "|";	
									}
								}
							});
							
							
							if (message != previous) {
								previous = message;
								
								var aVisibleSections = message.split("|");
								if (aVisibleSections[0] != "" && aVisibleSections[1] != "") {
									$("#aPreviousSection").attr("href", "#" + aVisibleSections[0]);
									$("#aNextSection").attr("href", "#" + aVisibleSections[1]);								
								}else{
									switch(aVisibleSections[0]){
									case "pageHome":
										$("#aPreviousSection").attr("href", "#");
										$("#aNextSection").attr("href", "#pageServices");
										break;									
									case "pageServices":
										$("#aPreviousSection").attr("href", "#pageHome");
										$("#aNextSection").attr("href", "#pageFabrication");
										break;								
									case "pageFabrication":
										$("#aPreviousSection").attr("href", "#pageServices");
										$("#aNextSection").attr("href", "#pageContact");
										break;
									case "pageContact":
										$("#aPreviousSection").attr("href", "#pageFabrication");
										$("#aNextSection").attr("href", "#");
										break;
									default:
										$("#aPreviousSection").attr("href", "#");
										$("#aNextSection").attr("href", "#");
										break;
									}
									
								}
								$(".subNavRight ul li").each(function(){
									$(this).removeClass("activePage");	
									if ($(this).attr("id") === ("nli" + aVisibleSections[0])) {
										$(this).addClass("activePage");	
									}
								});
								$(".subNavRight ul li a").each(function(){
									$(this).removeClass("activeLink");	
									if ($(this).attr("id") === ("na" + aVisibleSections[0])) {
										$(this).addClass("activeLink");	
									}
								});
								
							}        
						});
					});

					$('a').click(function(event) {
						if ($(this).attr('href').length > 0) {
							if ($(this).attr('href').substr(0, 1) !== "#") {
								return true;
							}else{
								event.preventDefault();	//stop the browser from jumping to the anchor
								var href  = $(this).attr('href'),
									oset  = $(href).offset().top;
								$('html, body').stop().animate({
									scrollTop : oset
								}, 1000, function () {
									//location.hash = href;
								});
								
							}
						}else{
							return true;
						}
					});
				});
// Scrolling Divs End

// Preloader

$(document).ready(function () {

 

  // preloader

  $(window).load(function(){

    $('.preloader').delay(400).fadeOut(500);

  })

 

})

// Preloader Ends

// Print Function

//function print(){
	//document.Print();
//}

// Print Function

// toggle nav



// new 

function listHeightPrint(){

	document.getElementById("listHeight").innerHTML = (divHeight - 5) + "px";

		}

	

	/* height of div adjusts */

	

	var divHeight = window.innerHeight;

	function newHeight(){

		document.getElementById("wrapper").style.height = (divHeight - 5) + "px";

		}

	

	function divResize(){

		divHeight = window.innerHeight;

		document.getElementById("wrapper").style.height = (divHeight - 5) + "px";

	}

	

	var divHeight2 = window.innerHeight;

	var newHeight2 = window.innerHeight;

	

	function newHeight2(){

		document.getElementById("footerPage").style.height = (newHeight2 - 5) + "px";

		}

	

	function divResize2(){

		divHeight2 = window.innerHeight;

		document.getElementById("footerPage").style.height = (divHeight - 5) + "px";

	}

	

	/* height of div adjusts */

function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}

function MM_preloadImages() { //v3.0

  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();

    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)

    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}

}



function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.M