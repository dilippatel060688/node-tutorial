

const{MongoClient}= require("mongodb");
const url="mongodb+srv://dilippatel:Testing%40123@cluster0.at3u0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const database="user_management";
const client=new MongoClient(url);




 async function getData()
  {
     let result= await client.connect();
     let db=result.db(database);
     let collection=db.collection('users');
     let response= await collection.find({}).toArray();
     console.log(response);
  }


  getData()