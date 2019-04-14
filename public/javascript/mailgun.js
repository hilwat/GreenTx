var mgname = document.getElementById("name");
var mgemail = document.getElementById("email");
var mgpatient = document.getElementById("patient");
var mgpartnership = document.getElementById("partnership");


var mailgun = require("mailgun-js");
var DOMAIN = 'mg.greentx.ca'
var mailgun = require('mailgun-js')({apiKey: "key-f6bb4cf5b97143a7168320a9f3f2977e", domain: DOMAIN});
// var messageToClient = {
//     from: 'Admin Greentx <info@greentx.ca>',
//     to: mgemail,
//     subject: 'Thank you for your inquery to GreenTx',
// 		text: mgname, 'We appreciate your message to GreenTx we aim to respond as soon as possible!'
// };
// mailgun.messages().send(messageToClient, function (error, body) {
//     console.log(body);
// });

var messageToHost = {
	from: 'Message GreenTxSite <info@greentx.ca>',
	to: 'info@greentx.com',
	subject: 'Message from GreenTxSite',
	text: 'We have a message from'
	
};
mailgun.messages().send(messageToHost, function (error, body) {
	console.log(body);
});