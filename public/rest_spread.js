const arr = [1,2,3,5,61,42,2,44,23];
//console.log(...arr,2,4,11);

///promise 
const process_completed =1;
new Promise(function(resolve,reject){
    if(process_completed){
        resolve();
    }else{
        reject();
    }
}).then(()=>{// resolve
    console.log("alles.klar");
}) .catch(()=>console.log("smt wrong"))

function resolve(){
    console.log("resolve");
}

function reject(){
    console.log("reject");
}