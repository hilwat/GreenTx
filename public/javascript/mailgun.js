const functions = require('firebase-functions');

var mgname = document.getElementById("name");
var mgemail = document.getElementById("email");
var mgpatient = document.getElementById("patient");
var mgpartnership = document.getElementById("partnership");
console.log("hello world", mgname, mgemail, mgpatient, mgpartnership)

var mailgun = require("mailgun-js");
var DOMAIN = 'mg.greentx.ca';
var mailgun = require('mailgun-js')({apiKey: "key-f6bb4cf5b97143a7168320a9f3f2977e", domain: DOMAIN});
var messageToClient = {
    from: 'Admin Greentx <info@greentx.ca>',
    to: "watson.hilary@gmail.com",
    subject: 'Thank you for your inquery to GreenTx',
		text:  'Wereciate your message to GreenTx we aim to respond as soon as possible!'
};
exports.sendemail = messages().send(messageToClient, function (error, body) {
  console.log(body);
});
exports.pleaseWork = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

