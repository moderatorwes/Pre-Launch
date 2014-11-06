Pre-Launch
=======================
Pre-Launch is a simple theme that you can use while you are building out your new Zendesk theme.  This theme currently gives you a countdown timer along with the ability to submit tickets.  This is a very simple theme and you only have to edit two pages of HTML.  This theme is responsive and will work across many different monitor sizes including mobile phones.  You can use this theme or any code in this theme however you would like.  Enjoy!

See it Live Here:  http://moderatorwes.zendesk.com (for a limited time only)

Like my theme then show your appreciation with a cup of coffee or two.  
<a href='http://ko-fi.com?i=8d141fc13e992fb' target='_blank'><img style='border:0px' src='http://ko-fi.com/img/button-4.png' border='0' alt='Buy Me A Coffee :) @ ko-fi.com' /></a>

Updates
========
* 11/06/14 - Coming Soon


Features
=========
* Bootstrap Responsive FrameWork
* FontAwesome Icons
* Google Fonts
* JQuery countdown timer (http://hilios.github.io/jQuery.countdown/)
* Backstretch JQuery Plugin (http://srobbin.com/jquery-plugins/backstretch/)
* High Quality Images from (https://unsplash.com/)
* Custom HTML, CSS, & JavaScript
* more..

How to Install
==============

Select the Humble Squid Theme as this was the site I used to start off with.  

Assets
* Open up the Assets folder and download the files
* Upload the files to the Assets area in ZenDesk

CSS
* Open up the CSS folder and click on CSS.css
* Copy and Paste the code into the CSS tab in ZenDesk

JS
* Open up the JS folder and click on the JS.fs
* Copy and Paste the code into the JS tab in ZenDesk

HTML
* Open up the HTML folder and click on one of the html files.
* Copy and Paste the code into Zendesk
* VERY IMPORTANT - Change the links in the Document Head to point to your Assets folder


Changing the Countdown Timer
=============================
Open the JS Tab from the Zendesk theme editor and find the below lines of code:

```
 //Counter Script//
 var finalDate = '2015/01/01';
 ```

Change the date to whatever date you want and the countdown script will start counting donw.


Changing the Background Images
===============================
Upload your image/images to the Assets tab.
Open the JS tab from the Zendesk theme editor and find the below lines of code:

```
 //Backstretch Plugin single image 
 //$.backstretch("/hc/theme_assets/426700/200017498/cs-bg.jpg");

 //Backstretch Plugin multiple images
  $("#intro").backstretch([
    "/hc/theme_assets/426700/200017498/cs-bg.jpg"
    , "/hc/theme_assets/426700/200017498/CS-bg-4.jpg"
    , "/hc/theme_assets/426700/200017498/CS-bg-3.jpg"
    , "/hc/theme_assets/426700/200017498/CS-back.jpg"
    ], {duration: 7000, fade: 750}); 
```
  
  If you want a single image then uncomment by removing the double forward slashes (//) and put the URL to your image file.  Then comment out all of the multiple images.
  
  If you want multiple images then just put the correct URL from the Assest folder in the lines above.

Screenshots
===========
![Alt text](/Screenshots/Midnight-Home.png?raw=true "Home Page")
![Alt text](/Screenshots/Midnight-Community.png?raw=true "Community Page")
![Alt text](/Screenshots/Midnight-Contributions.png?raw=true "Contributions")



