KISSY.add("apebook/bundle/sidebar",["jquery","lodash","./storage","./platform","./state"],function(t,o,a,i){function s(t,o){(null==b||n()!=t)&&(null==o&&(o=!0),b.$book.toggleClass("without-animation",!o),b.$book.toggleClass("with-summary",t),c.set("sidebar",n()))}function n(){return b.$book.hasClass("with-summary")}function e(){h.isMobile()||s(c.get("sidebar",!0),!1),r(document).on("click",".book-summary li.chapter a",function(){h.isMobile()&&s(!1,!1)})}function l(t){var o=r(".book-summary");o.find("li").each(function(){var o=r(this).data("path"),a=null==t||u.contains(t,o);r(this).toggle(a),a&&r(this).parents("li").show()})}var r=o("jquery"),u=o("lodash"),c=o("./storage"),h=o("./platform"),b=o("./state");i.exports={init:e,isOpen:n,toggle:s,filter:l}});