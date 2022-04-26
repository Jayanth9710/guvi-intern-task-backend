import express  from'express'
import cors  from'cors';
import mongoose  from'mongoose'
const app = express();
import dotenv from'dotenv';
const PORT = process.env.PORT || 8080
import router from"./Routes/UserRoutes.js";


dotenv.config();

app.use(express.json());

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.on('connected',()=>{
    console.log("Mongoose Connected")
})

app.use("/",router);

app.listen(PORT,function(){
    console.log(`The App is running on Port ${PORT}`)
})