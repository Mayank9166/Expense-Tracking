const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')
const colors = require('colors')
const userRoutes = require('./routes/userRoute');
const connectDb = require('./config/connectDb')


//config dot env file

dotenv.config();
connectDb();



//rest object
const app = express();




//middlewares

app.use(express.json())
app.use(cors());


//routes
//user Route
app.use('/user',userRoutes);


//transection Route
app.use('/transections',require('./routes/transectionRoutes'));

//port

const PORT = 8080 || process.env.PORT


//listening
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
})