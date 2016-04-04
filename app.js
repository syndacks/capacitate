var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var urlParser = require('url');

var urlToScrape = 'https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=2845';


var urls = [];
var titles = [];

request(urlToScrape, function(err, res, body){
	if(!err && res.statusCode === 200){
		//get the URL from each link in the 'Plan de Capacitacion'
		var $ = cheerio.load(body);
		$('a', 'tbody').each(function() {
			var url = $(this).attr('href');
			if(url == undefined)
				return;
			var fixedUrl = urlParser.resolve(urlToScrape, url);
			console.log(fixedUrl)
			urls.push(fixedUrl)
			
		});
		//get the titles for each Object

		



		//console.log(urls)
	}

});
