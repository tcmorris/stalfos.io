function debounce(t,e,n){var a;return function(){var o=this,r=arguments,i=function(){a=null,n||t.apply(o,r)},c=n&&!a;clearTimeout(a),a=setTimeout(i,e),c&&t.apply(o,r)}}!function(t){t.fn.any=function(){return t(this).length>0},t.fn.parseSettings=function(){var e=t(this),n={};if(e.attr("data-settings"))try{n=t.parseJSON(e.attr("data-settings"))}catch(a){return console.log("Check input data. Message: "+a.message),{}}return n},t.extend({ajaxRequest:function(e){var n={dataType:"application/json",url:"/",data:{},method:"GET",callback:null},a=function(){n=t.extend(!0,{},n,e),t.ajax({contentType:n.dataType,url:n.url,data:n.data,type:n.method,success:function(t){o(t)},error:function(t){o(t)}})},o=function(t){"function"==typeof n.callback&&n.callback(t,null==t||200!=t.status)};a()}}),t.extend({ajaxHtml:function(e,n){t.ajaxRequest({dataType:"text/html",url:e,callback:n})}}),t.extend({queryString:{toJson:function(e){var n={},a=window.location.href.toString().toLowerCase(),o=[];if("undefined"==typeof a)return{};if(0==a.length)return{};"undefined"==typeof e&&(e=[]),o=a.split("?")[1].split("&");for(var r=0,i=o.length;r<i;r++){var c=o[r].split("=");n[c[0]]=c[1]}return e.length>0&&t.each(e,function(t,e){n.hasOwnProperty(e)&&delete n[e]}),n},fromJson:function(e){return"?"+t.param(e).replace("?","&")}}}),t.extend({esc:function(e){var n={callback:null};n=t.extend(!0,{},n,e),"function"==typeof n.callback&&t(document).keyup(function(t){27==t.keyCode&&n.callback(t)})}}),t.extend({getBreakpoint:function(){return window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/\"/g,"")}}),t.fn.changeEvent=function(){var e=t(this),n="change";switch(e.prop("tagName").toString().toLowerCase()){case"input":"checkbox"!=e.attr("type")&&"radio"!=e.attr("type")&&(n="input")}return n}}($),function(t){t.fn.siteHead=function(){var e=t(this),n={activeClass:"is-active"},a=function(){n=t.extend(!0,{},n,e.parseSettings())};return a(),this}}($);var app=function(t){var e=function(){var e=t("[data-module]");e.any()&&e.each(function(){var e=t(this),n=e.attr("data-module");n&&(n=n.split(","),t.each(n,function(t,e){switch(e){case"example1":}}))}),console.log("All is hunky dory")};return{init:e}}(window.$);app.init();
//# sourceMappingURL=app.js.map