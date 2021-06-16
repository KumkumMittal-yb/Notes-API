const https=require('https');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=c00082db488ae8cb9b823eff69c0b989';

const request=https.request(url,(response)=>{
    let data=''

    response.on('data',(chunk)=>{
        data=data+chunk.toString();
        
    })

    response.on('end',()=>{
        const body=JSON.parse(data);
        console.log(body);

    })
})

request.on('error',(error)=>{
    console.log("AN error",error);
})
request.end();