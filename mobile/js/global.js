$(function(){"use strict";$("body").on("click",".ga-tracking",function(){var e=$(this).attr("category"),i=$(this).attr("action"),a=$(this).attr("label");ga("send","event",e,i,a)}),$(".openSideNav").click(function(e){e.stopPropagation(),$(this).hasClass("open")?($(this).removeClass("open"),$(".sideMask").hide(),$("#wrapper, .bottomBtn, .quickLink, .sideMask, .indexLink").removeClass("moveRight"),$("#sideNav").removeClass("moveOrigin")):($(this).addClass("open"),$(".sideMask").fadeIn(),$("#wrapper, .bottomBtn, .quickLink, .sideMask, .indexLink").addClass("moveRight"),$("#sideNav").addClass("moveOrigin"))}),$("#sideNav a").click(function(){$("#wrapper, .bottomBtn, .quickLink, .sideMask, .indexLink").removeClass("moveRight"),$(".sideMask").hide(),$(".openSideNav").removeClass("open"),$("#sideNav").removeClass("moveOrigin")}),$(document).on("click",".sideMask",function(){$("#wrapper, .bottomBtn, .quickLink, .sideMask, .indexLink").removeClass("moveRight"),$(".sideMask").hide(),$(".openSideNav").removeClass("open"),$("#sideNav").removeClass("moveOrigin")}),$(".gotop").click(function(e){e.stopPropagation(),$("#wrapper").animate({scrollTop:0},500)}),$("body").on("change","input[type=radio]",function(){var e=$(this).attr("name");$("input[name="+e+"]").parent(".radio").removeClass("checked"),$(this).parent(".radio").addClass("checked")}),$("body").on("change","input[type=checkbox]",function(){var e=$(this).prop("checked");e?$(this).parent(".checkbox").addClass("checked"):$(this).parent(".checkbox").removeClass("checked")}),$(".btnGuard").on("click",function(){$(".mask").fadeIn(),player.loadVideoById("_x9DEtftCVU")}),$(".videoClose").on("click",function(){$(".mask").fadeOut(),player.pauseVideo()})});