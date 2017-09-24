var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./nodejs-846c47b5ba5c.json",
    databaseURL: "https://fir-4fae0.firebaseio.com/"
});

var ref = firebase.database().ref('node-client');
var messagesRef = ref.child('messages');
// var messageRef = messagesRef.push();
// var messageKey = messageRef.key;
// var payload = {};

// var message = {
//     text: 'hey guys'
// };
// payload['userMessages/' + messageKey] = message;
// payload['logs/' + messageKey] = message;

// ref.update(payload);

// ref.once('value').then(function(snap) {
//     console.log(snap.key, "\n\n");
//     console.log(snap.ref.toString(), "\n\n");
//     console.log(snap.val(), "\n\n");
// });



// var logs;
// ref.child('logs').on('value', function(snap) {
//     logs = snap.val();
//     console.log(logs);
// });


// messagesRef.push({
//     name: 'Arjun',
//     admin: true,
//     count: 1,
//     text: 'Hey guys'
// });


// ref.update({
//     'messages/some/child': 1,
//     'messages/another/child': 2
// })