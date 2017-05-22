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
        //db.close();
    })


    // Insert To DB
    var customerDetails = {'name':'Someone','email':'someone@someone.org'}
    db.collection('customers').insertOne(customerDetails,function(err,docs){

        if(err) throw  err;

        console.log('Resource  inserted');

    })

    // Find 

    db.collection('customers').find().toArray(function(err,docs){

        console.info('Data',docs);


        
    });

    // Update 

    db.collection('customers').updateOne({name:'Someone'},{name:'Sarath The Kind'},function(err,doc){

        if(err) throw err;

        console.log('Resource updated');


    })

    // Remove 
    db.collection('customers').deleteOne({name:'Someone'},function(err,docs){

        console.info('Resource deleted ')

        // close connection

        db.close();


    })
    
});