$(window).load(function(){$(".loader").delay(300).fadeOut(),$(".animationload").delay(600).fadeOut("slow")}),$(document).ready(function(){$("#testi-carousel").owlCarousel({items:1,singleItem:!0,startDragging:!0,autoPlay:!0})}),$(window).scroll(function(){$(".navbar-collapse.collapse.in").collapse("hide"),$(".navbar").offset().top>1?$(".navbar-fixed-top").addClass("navbar-bg"):$(".navbar-fixed-top").removeClass("navbar-bg")}),$(function(){$(".navbar a").bind("click",function(o){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-50},1500,"easeInOutExpo"),o.preventDefault()})}),jQuery("html").niceScroll({scrollspeed:50,mousescrollstep:38,cursorwidth:7,cursorborder:0,cursorcolor:"#757575",autohidemode:!1,zindex:9999999,horizrailenabled:!1,cursorborderradius:0}),jQuery(document).ready(function(){wow=new WOW({animateClass:"animated",offset:100,mobile:!0}),wow.init()}),$(window).scroll(function(){$(this).scrollTop()>100?$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()}),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});