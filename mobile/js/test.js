!function(){function e(){a=!1}function t(t,n){return a?!1:(a=!0,void(-1===Math.floor(t/140)?n.find(".container").animate({marginLeft:"0"},function(){n.find(".container").css({marginLeft:"-840px"}),e()}):n.find(".container").animate({marginLeft:140*Math.floor(t/140)+140+"px"},function(){e()})))}function n(t,n){return a?!1:(a=!0,void(-6===Math.floor(t/140)?n.find(".container").animate({marginLeft:140*Math.floor(t/140)-140+"px"},function(){n.find(".container").css({marginLeft:"-140px"}),e()}):n.find(".container").stop(!1,!0).animate({marginLeft:140*Math.floor(t/140)-140+"px"},function(){e()})))}function s(e){o=e.touches[0].clientX,c=e.touches[0].clientY}function i(e){if(o&&c){var s=e.touches[0].clientX,i=e.touches[0].clientY,a=o-s,r=c-i;Math.abs(a)>Math.abs(r)&&(a>0?n(parseInt($(this).find(".container").css("margin-left"),10),$(this)):t(parseInt($(this).find(".container").css("margin-left"),10),$(this))),o=null,c=null}}var a=!1,o=null,c=null;document.getElementById("diseaseList").addEventListener("touchstart",s,!1),document.getElementById("diseaseList").addEventListener("touchmove",i,!1),$("body").on("click","#diseaseList .disease",function(){var e=parseInt($(this).attr("class").substr(15,1),10),s=Math.abs(Math.floor(parseInt($(".container").css("margin-left"),10)/140));console.log(e,s),6===e&&1===s&&t(parseInt($(".container").css("margin-left"),10),$("#diseaseList")),1===e&&6===s&&n(parseInt($(".container").css("margin-left"),10),$("#diseaseList")),e>s&&n(parseInt($(".container").css("margin-left"),10),$("#diseaseList")),s>e&&t(parseInt($(".container").css("margin-left"),10),$("#diseaseList")),$("#diseaseList .disease").removeClass("selected"),$(".disease"+e).addClass("selected")}),$("body").on("click",".gameBox .btn",function(){if(0===$(".disease.selected").length)return!1;var e=$(".disease.selected").attr("class").substr(15,1);$(".gameBox, .outcome").hide(),$(".outcomeBox").show(),$(".outcome"+e).show(),$(".formSection .form").hide().eq(Math.floor(3*Math.random())).show()}),$("body").on("click",".again",function(){$("#diseaseList .disease").removeClass("selected"),$(".gameBox").show(),$(".outcome, .outcomeBox").hide()}),$("body").on("click",".playVideo",function(){$(".mask").fadeIn(),player.loadVideoById("_x9DEtftCVU")}),$("body").on("click",".video .close",function(){$(".mask").fadeOut(),player.pauseVideo()})}();