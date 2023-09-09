const express= require ('express');
const{ ServerConfig, Logger }= require('./config');
const app=express();

const apiroutes=require('./routes');
app.use('/api', apiroutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on port : ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", {});
});