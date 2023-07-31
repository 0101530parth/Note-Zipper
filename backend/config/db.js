const mongoose =require('mongoose');
const connectDB = async()=>{
try{
    const conn=await mongoose.connect("mongodb+srv://Parth:Parth1234@cluster0.xns2z0n.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        // useCreateIndex:true,
    });
    // console.log(conn)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}catch(error){
    console.log(`Error: ${error.message}`);
    process.exit();
}
};
module.exports = connectDB;