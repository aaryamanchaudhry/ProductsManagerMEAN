const express = require('express');
const app = express(); 
const port = 8887;
const bodyParser= require('body-parser');
const MongoClient= require('mongodb').MongoClient;
const url= 'mongodb://localhost:27017';
var dbName ;
var collectName ;
app.use(bodyParser.json());app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();})
app.listen(port,()=>console.log(`Server running at localhost: ${port}!`))



app.post('/deleteAll', (req, res) =>
 {input = req.body.params;


    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
         (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
         return console.log('Unable to connect to the mongoDB: ', err);} 
         else { // Server connected
            db= data.db(dbName);
            collection = db.collection(collectName);


            collection.drop((err,result)=> {if (err) { data.close();return;  }
        })

             // insertOne
            }
            // Server connected
            data.close();  }); // Mongodb
        });

app.post('/insert', (req, res) =>
 {input = req.body.params;


    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
         (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
         return console.log('Unable to connect to the mongoDB: ', err);} 
         else { // Server connected
            db= data.db(dbName);
            collection = db.collection(collectName);


            collection.drop((err,result)=> {if (err) { data.close();return;  }
        })

            collection.insertMany(input, (err,result)=> {if (err) { data.close();return;  }
             res.send( {"message": 'Record added', "id": result.insertedId});})
             // insertOne
            }
            // Server connected
            data.close();  }); // Mongodb
        });


        app.post('/createDatabase', (req) =>
        {
            input = req.body.params;

            this.input = JSON.stringify(this.input);
          
           console.log(input.ct)

           dbName = input.db;
            collectName = input.ct;
       
           
               });


        app.post('/insertNew', (req, res) =>
 {input = req.body.params;
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
         (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
         return console.log('Unable to connect to the mongoDB: ', err);} 
         else { // Server connected
            db= data.db(dbName);
             collection = db.collection(collectName);
            

            collection.insertOne(input, (err,result)=> {if (err) { data.close();return;  }
             res.send( {"message": 'Records from database added', "id": result.insertedId});})
             // insertOne
            }
            // Server connected
            data.close();  }); // Mongodb
        });

        app.post('/retrieve', (req, res) => { 
            console.log("Hi")
            MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
             (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
             return console.log('Unable to connect to the mongoDB: ', err);} 
             else { // Server connected
                
                db= data.db(dbName);
            collection = db.collection(collectName);
            console.log("sup")
                collection.find("").toArray( (err,records)=> {
                    
               if (err) { 
                console.log("no")
                data.close();
                return;  }
                i= records.length;
                res.json(records);
                console.log("Hi")
            })
        // find
    }
    // Server connected
    data.close();  }); // Mong
});

app.post('/retrievewithquery', (req, res) => { 
    input = req.body.params;
    
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
     (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
     return console.log('Unable to connect to the mongoDB: ', err);} 
     else { // Server connected
        
        db= data.db(dbName);
     collection = db.collection(collectName);
    console.log("yeaa")

    var inputFinal = '{ "pid" : ' + '"' + input + '"' + "}";
    
    
    console.log(inputFinal);
    inputFinal = JSON.parse(inputFinal);

        collection.findOne( inputFinal , (err,records) => {
            
       if (err) { 
        data.close();
        return;  }


        
        res.json(records);
        console.log("yeaa2")
        console.log(records)
    })
// find
}
// Server connected
data.close();  }); // Mong
});



app.post('/delete', (req, res) => { 
    input = req.body.params;
    
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
     (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
     return console.log('Unable to connect to the mongoDB: ', err);} 
     else { // Server connected
        
        db= data.db(dbName);
     collection = db.collection(collectName);
    console.log("yeaa")

    var inputFinal = '{ "pid" : ' + '"' + input + '"' + "}";
    
    
    console.log(inputFinal);
    inputFinal = JSON.parse(inputFinal);

        collection.deleteOne( inputFinal , (err,records) => {
            
       if (err) { 
        data.close();
        return;  }


        
        res.json(records);
        console.log("yeaa2")
        console.log(records)
    })
// find
}
// Server connected
data.close();  }); // Mong
});






  
app.post('/update', (req, res) => { 
    input = req.body.params;
    
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },
     (err, data) => {if (err) {console.log('Unable to connect to the mongoDB: ', err);
     return console.log('Unable to connect to the mongoDB: ', err);} 
     else { // Server connected
        
        db= data.db(dbName);
     collection = db.collection(collectName);
    console.log("yeaa")

    var inputFinal = JSON.stringify(input);
    var myQuery = '{ "pid" : ' + '"' + inputFinal.id + '"' + "}";
  var newvalues = '{ $set: {pdesc: " ' + inputFinal.desc + '", pqty: "' + inputFinal.qty + '", pid: "' + inputFinal.id + '", pprice: "' + inputFinal.price + '", preqty: "' + inputFinal.reqty + ' } }';
  inputFinal = JSON.parse(inputFinal);
    console.log(inputFinal);
   

        collection.updateOne( myQuery, inputFinal , (err) => {
            
       if (err) { 
        data.close();
        return;  }


        
        
        console.log("yeaa2")
        
    })
// find
}
// Server connected
data.close();  }); // Mong
});