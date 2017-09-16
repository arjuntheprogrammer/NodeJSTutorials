function greet(callback) {
    console.log("Hello");
    var data = {
        name: 'Arjun'
    }
    callback(data);
}

greet(function(data) {
    console.log('the callback was invoked!');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback was invoked!')
    console.log(data.name);
});