const Knwl = require('knwl.js');
const knwlInstance = new Knwl('english');
knwlInstance.register('places', require('knwl.js/default_plugins/places'));
knwlInstance.register('emails', require('knwl.js/default_plugins/emails'));
knwlInstance.register('links', require('knwl.js/default_plugins/links'));
knwlInstance.register('phones', require('knwl.js/default_plugins/phones'));
const request = require('request');
const cheerio = require('cheerio');

const emailAddress = 'tim@systemPioneer.com'
const businessName = emailAddress.split(/\@(.*)/)[1];

const visitPage = `http://www.${businessName}`;

console.log('Scanning: ', visitPage);

request(visitPage, function(error, response, HTML) {
  if(error) {
    console.log("Error: " + error);
  }
  if(response.statusCode === 200) {
    var $ = cheerio.load(HTML);
    var $body = $('body').text();
  }
  
  
knwlInstance.init($body);

const phones = knwlInstance.get('phones');  
const places = knwlInstance.get('places'); 
const emails = knwlInstance.get('emails'); 
const links = knwlInstance.get('links'); 

console.log('PHONE NUMBERS: ',phones);
console.log('PLACES: ',places);
console.log('EMAILS: ',emails);
console.log('LINKS: ', links);

});
