const functions = require('firebase-functions');

// var mailgun = require("mailgun-js");
// var DOMAIN = 'mg.greentx.ca';
// var mailgun = require('mailgun-js')({apiKey: "key-f6bb4cf5b97143a7168320a9f3f2977e", domain: DOMAIN});
// var messageToClient = {
//     from: 'Admin Greentx <info@greentx.ca>',
//     to: "watson.hilary@gmail.com",
//     subject: 'Thank you for your inquery to GreenTx',
// 		text:  'Wereciate your message to GreenTx we aim to respond as soon as possible!'
// };
// exports.sendemail = mailgun.messages().send(messageToClient, function (error, body) {
//   console.log(body);
// });

exports.pleaseWork = hi => {
  // Grab the text parameter.
  console.log("hi");
};