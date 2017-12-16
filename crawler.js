const Knwl = require('knwl.js');
const knwlInstance = new Knwl('english');
knwlInstance.register('places', require('knwl.js/default_plugins/places'));
knwlInstance.register('emails', require('knwl.js/default_plugins/emails'));
knwlInstance.register('links', require('knwl.js/default_plugins/links'));
knwlInstance.register('phones', require('knwl.js/default_plugins/phones'));
const request = require('request');
const cheerio = require('cheerio');

const emailAddress = 'tim@kompli-global.com'
const businessName = emailAddress.split(/\@(.*)/)[1];

const visitPage = `http://www.${businessName}`;

console.log('Scanning: ', visitPage);

request(visitPage, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  if(response.statusCode === 200) {
    var $ = cheerio.load(body);
    var $body = $('body').html();
  }
  
  
knwlInstance.init($body);

const emails = knwlInstance.get('emails');
const places = knwlInstance.get('places'); 
const links = knwlInstance.get('links');
const phones = knwlInstance.get('phones');  

function getEmails(emails) {
  if (emails.length === 0) return [];
  emails.forEach((email) => {
    console.log('Email: ', email.address);
  });
}

function getPhoneNumbers(phones) {
  if (phones.length === 0) return [];
  emails.forEach((phone) => {
    console.log('Phone: ', phone.number);
  });
}

function getPlaces(places) {
  if (places.length === 0) return [];
  places.forEach((place) => {
    console.log('Place: ', place.place);
  });
}

function getLinks(links) {
  if (links.length === 0) return [];
  links.forEach((link) => {
    console.log('Link: ', link.link);
  });
}

getEmails(emails);
getPhoneNumbers(phones);
getPlaces(places);
getLinks(links);

});
