const creator = 'Si.Totes'

const express = require("express");
const serverless = require("serverless-http");
const {
  MongoClient
} = require('mongodb');

const app = express();
const router = express.Router();



router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/shlink.json", (req, res) => {
  res.json({
    hello: "whiii!"
  });
});





// app.get('/shlink.json', async (req, res) => {
//     res.json(await shortUrlFindAll())
// })







app.use(`/api`, router);








async function shortUrlFindAll() {
    
    
    const url = 'mongodb+srv://sitotes:sitotes01@dbwacluster.d5awtyl.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(url);
    await client.connect()
    const db = client.db('RestApi')
    const shorturl = db.collection('shorturl')
    const otpot = await shorturl.find().toArray()
    await client.close()
    return otpot
}

module.exports = app;
module.exports.handler = serverless(app);
