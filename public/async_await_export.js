const axios = require('axios');
//console.log(axios);
getData = ()=>{
    axios.get('https//udemy.com').then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    })
}

getShow = async ()=>{
    await getData();
    console.log("not before fetch data!");
}


