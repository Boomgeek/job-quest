var app = require('express')();
var trips = require('./trips');
var mongojs = require('./db');
var db = mongojs.connect;
var ObjectId = require('mongodb').ObjectID;

var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
	db.trips.count(function(err, result){
        if(result <= 0){
            db.trips.insert(trips.findAll(), function(err, docs){
                    //insert new user
            });
        }
        res.send('<h1>Hello Node.js</h1>');
    });
});
 
//GET /trips list all trips (only trip name and _id)
app.get('/trips', function (req, res) {
    db.trips.find({} ,{_id:1, name:1} ,function(err, docs){
        res.json(docs);
    });
});

//POST /trips create new trip
app.post('/trips', function (req, res) {
    var json = req.body;
    db.trips.insert(json, function(err, docs){
        res.send('Add new '+ docs.name + ' Completed');
    });
});

//GET /trips/:id get trip detail (all fields)
app.get('/trips/:id', function (req, res) {
    var id = req.params.id;
    db.trips.findOne({_id: ObjectId(id)} ,function(err, docs){
    	res.json(docs);
    });
});

//PUT /trips/:id update trip
app.put('/trips/:id', function (req, res) {
    var id = req.params.id;
    var json = req.body;
    db.trips.update({_id: ObjectId(id)} ,json ,function(err, docs){
        if(docs.ok == 1 && docs.nModified == 1 && docs.n == 1){
            res.send('Update trip '+ id + ' Completed');
        }else{
            res.send('Update trip '+ id + ' Not Completed');
        }
    });
});

//DELETE /trips/:id delete trip
app.delete('/trips/:id', function (req, res) {
    var id = req.params.id;
    db.trips.remove({_id: ObjectId(id)} ,function(err, docs){
        if(docs.ok == 1 && docs.n == 1){
            res.send('Delete trip '+ id + ' Completed');
        }else{
            res.send('Delete trip '+ id + ' Not Completed');
        }
    });
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});