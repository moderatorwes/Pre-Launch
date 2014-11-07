
/*
 * jQuery v1.9.1 included
 */
 
$(document).ready(function() {

//Backstretch Plugin Single Image  
//$.backstretch("/hc/theme_assets/YOUR/ASSET/cs-bg.jpg");

//Backstretch Multiple Image
  $("#intro").backstretch([
     "/hc/theme_assets/YOUR/ASSET/cs-bg.jpg"
    , "/hc/theme_assets/YOUR/ASSET/CS-bg-4.jpg"
     , "/hc/theme_assets/YOUR/ASSET/CS-bg-3.jpg"
     , "/hc/theme_assets/YOUR/ASSET/CS-back.jpg"
  ], {duration: 7000, fade: 750});



//Counter Script//
var finalDate = '2015/01/01';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>days</em></span>' + 
   										 	 '<span>%H <em>hours</em></span>' + 
   										 	 '<span>%M <em>minutes</em></span>' +
   										 	 '<span>%S <em>seconds</em></span>'));

   });  
   
   
   
   //Zendesk Defaults

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });
  
});
