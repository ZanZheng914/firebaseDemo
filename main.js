var admin = require('firebase-admin');
var serviceAccount = require("./fir-demo-d0da7-firebase-adminsdk-z27ul-9c54e12498.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://fir-demo-d0da7.appspot.com'

});
// var defaultProjectManagement = admin.projectManagement();
// console.log(defaultProjectManagement);
let db = admin.firestore();
db.collection('users').get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log(doc.id, '=>' , doc.data());
        });
    })
    .catch((err)=>{
        console.log('Erroe getting docs',err);
    })

//const admin = require('firebase-admin');
//var serviceAccount=require("./fir-demo-d0da7-firebase-adminsdk-z27ul-9c54e12498.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });
// //let db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;
/*
addData();
//增加數據
async function addData(){
    for(i=1;i<=5;i++){
        const res = await db.collection('users').add({
            name:'用戶'+ i,
            gender: i %2 == 0 ? '男' : '女',
            regdate : FieldValue.serverTimestamp()
        });
        console.log('Added document with ID', res.id);
    }
} */
/*
getDate();
async function getDate(){
    await db.collection('users').get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err)=>{
        console.log('Error getting documents',err);
    });
} 
*/
/*
upDate();
async function upDate(){
    const userRef = db.collection('users').doc('5uJHTYmj7OXuylFKUloz');
    const res = await userRef.update({
        age: 25,
        upddate: FieldValue.serverTimestamp(),
        name: "皮卡丘"
    });
} */
/*
delDate();
async function delDate(){
    let deleteDoc = db.collection('users').doc('usX5z3hOnwbmRgkd8kGc').delete();
}
*/

var uuid = require('uuid-v4');
// var admin = require('firebase-admin');
// var serviceAccount = require("./fir-demo-d0da7-firebase-adminsdk-z27ul-9c54e12498.json");
var bucket = admin.storage().bucket();

/*
async function uploadFile(filename){
    await bucket.upload(filename,{
        gzip:true,
        metadata:{
            metadata:{
                firebaseStorageDownloadTokens:uuid()
            },
            cacheControl: ' public,max-age=31536000',
        },
    });
    console.log(`${filename} uploaded.`);
}
uploadFile('./img/train.jpg').catch(console.error);
*/