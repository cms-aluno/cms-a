Cookies.defaults={expires:60*60*24*30};$(document).ready(function(){$("#content").on("click","#fbut",function(){var c=$("#text-ui");$(c).find(".tt-hide-wrap").remove();var a=$(c).html();a=replaceAll("<div>","\n<div>",a);a=replaceAll("<br>","<br>\n",a);a=replaceAll("<br/>","<br>\n",a);$("#text-for-post").html(a);var b=$("#text-for-post").text();$("#hidden-text").val(b);$("#appform").submit()});createErrorTooltips();$("#result").on("change",function(){createErrorTooltips()});tabize();$("#content").on("change","#result",function(){tabize()});$("#content").on("click","#remove-all-ignore-words",function(){if(Cookies.enabled){Cookies.set("ignores","");$(".remove-ignore-word").remove()}});$("#content").on("click",".remove-ignore-word",function(){if(Cookies.enabled){var b=$(this).text();if(Cookies.enabled){var a=Cookies.get("ignores").split("|").filter(function(c){return c!=b});Cookies.set("ignores",a.join("|"))}$(".remove-ignore-word:contains("+b+")").remove()}});$(".clear-on-click").on("click",function(){$(this).html("").off("click")});$("#text-ui").focus()});$(this).on("paste",function(d){d.preventDefault();if((d.originalEvent||d).clipboardData){var c=(d.originalEvent||d).clipboardData.getData("text/plain");document.execCommand("insertText",false,c)}else{if(window.clipboardData){var c=window.clipboardData.getData("Text");if(document.selection){var a=document.selection.createRange();a.pasteHTML(c)}else{if(document.getSelection){var a=document.getSelection().getRangeAt(0);var b=document.createElement("p");a.surroundContents(b);b.innerHTML=c}}}}});function replaceAll(c,a,b){return b.replace(new RegExp(c,"g"),a)}function createErrorTooltips(){$("#text-ui .error-span").each(function(){$(this).tooltipster({content:$("div.tt-wrap",this),autoClose:false,interactive:true,contentCloning:false,delay:100,functionBefore:function(a,b){$(".tooltipstered").tooltipster("hide");b()},functionReady:function(a,b){$(".replace-option").mousedown(function(){var c=$(this).find("a").text();var d=$(this).find("a").data("targetid");$("#"+d).replaceWith(c)});$(".add-ignore").mousedown(function(){var c=$(this).data("ignoreword");$("#text-ui").find("[data-errorword='"+c+"']").replaceWith(decodeURI(c));if(Cookies.enabled){var d=[];if(typeof Cookies.get("ignores")!="undefined"&&Cookies.get("ignores")!=""){d=Cookies.get("ignores").split("|")}if($.inArray(c,d)==-1){d.push(c);Cookies.set("ignores",d.join("|"))}}});$(b).on("click",".tt-close",function(){$(a).tooltipster("hide")})}})})}function tabize(){if($("ul.tabs li").length){$("ul.tabs").each(function(){var a,b,c=$(this).find("a");a=$(c.filter('[href="'+location.hash+'"]')[0]||c[0]);a.addClass("active");b=$(a[0].hash);c.not(a).each(function(){$(this.hash).hide()});$(this).on("click","a",function(d){a.removeClass("active");b.hide();a=$(this);b=$(this.hash);a.addClass("active");b.show();d.preventDefault()})})}};