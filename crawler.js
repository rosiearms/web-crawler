const Knwl = require("knwl.js");
var knwlInstance = new Knwl('english');
const request = require('request');
const cheerio = require('cheerio');

const visitPage = "http://www.canddi.com";

request(visitPage, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   if(response.statusCode === 200) {
     var $ = body;
   }


knwlInstance.init($);

var phones = knwlInstance.get('phones');  
var places = knwlInstance.get('places'); 
var emails = knwlInstance.get('emails'); 
var links = knwlInstance.get('links'); 

console.log('PLACES: ',places);
console.log('PHONE NUMBERS: ',phones);
console.log('EMAILS: ',emails);
console.log('LINKS: ', links);

});
