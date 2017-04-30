
$(function() {
	let nytimes = jQuery.get('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml', function(data) { console.log(data) });
});