var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./nodejs-846c47b5ba5c.json",
    databaseURL: "https://fir-4fae0.firebaseio.com/"
});

var ref = firebase.database().ref('node-client');
var messagesRef = ref.child('messages');

messagesRef.push({
    name: 'Arjun',
    admin: true,
    count: 1,
    text: 'Hey guys'
});