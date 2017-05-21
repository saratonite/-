var mongodbClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

mongodbClient.connect(url,function(err,db) {
    if(err) throw err;
    console.log('connected')

    // Create collection 
    db.createCollection('customers',function(err,res){
        if(err) throw err;
        console.log('Created collection');
        //console.log(res);
        db.close();
    })
    
});