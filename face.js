    //New Code
    const form = new formidable.IncomingForm();
    form.on('file', function(name, file) {
      
        const blob = bucket.file(file.name);
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: file.type,
            },
        });

        // If there's an error
        blobStream.on('error', (err) => next(err));
        // If all is good and done
        blobStream.on('finish', () => {
            // Assemble the file public URL
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURI(blob.name)}?alt=media`;
            imagePath = publicUrl;
            console.log(publicUrl)
        });

        fs.createReadStream(file.path).pipe(blobStream);
    });
   
    form.parse(req, (err, fields, files) => {
    });
    //End





    //New Code
const fs = require('fs')
const { Storage } = require('@google-cloud/storage');
const formidable = require('formidable-serverless');
//End


//New
const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
});

//New
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);






//////////////////////////


/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
  **/
  
  
  const admin = require('firebase-admin');
  const get_ip = require('ipware')().get_ip;
  
  require('dotenv').config()
  
  admin.initializeApp({
    credential: admin.credential.cert(process.env.GCLOUD_APPLICATION_CREDENTIALS),
    databaseURL: "https://faceapi-monitor.firebaseio.com/",
    authDomain: "faceapi-monitor.firebaseapp.com",
  });
  
  
  
  const db = admin.firestore();
  
  let clientInfo = {};
  //New
  let imagePath = '';
  
  exports.resData = (proxyRes,req,res) => {
  
    let resData = {}
  
    proxyRes.on('data', (chunk) => {
        resData = chunk.toString();
        clientInfo.resStatus = proxyRes.statusCode;
        clientInfo.resPonseObject = resData;
        let timestamp = new Date().getTime();
        let time = new Date(timestamp).toTimeString().slice(0,12)
        clientInfo.resTime = time;
        db.collection('FaceApiMonitor').add(clientInfo);
    })
  }
  
  
  
  exports.requestData = (proxyReq,req,res) => {
    let ip = get_ip(req)
    let clientIp = ip.clientIp;
    let reqMethd =  req.method;
    let url = req.url;
    var fullDate = new Date().toISOString().slice(0,10);
    let timestamp = new Date().getTime();
    let time = new Date(timestamp).toTimeString().slice(0,12)
    let clienUserName = '';
  
    if(req.headers['username']) {
        clienUserName = req.headers['username'];
        clientInfo = {clientIp,reqMethd,url,fullDate,time,clienUserName};
    }else {
        clientInfo = {clientIp,reqMethd,url,fullDate,time};
    }
  
    
  
  }