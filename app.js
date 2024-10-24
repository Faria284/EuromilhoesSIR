express = require('express');
app = new express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');  // Set header to JSON type
    return res.json(bet());
});

app.get('/hello', function (req, res) {
    return res.send('Hello');
});

//app.get('/euro', function (req, res) {
//    res.setHeader('Content-Type', 'application/json');  // Set header to JSON type
//    return res.json(bet());
//});

function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}

function bet() {
    let numbers = generate(5, 1, 50);
    let stars = generate(2, 1, 12);
    return {
        "numbers": numbers,
        "stars": stars
    };
}

app.listen(3000, () => {
    console.log("listening");
});
