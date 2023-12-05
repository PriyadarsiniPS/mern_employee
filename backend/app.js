const express=require('express')
const mongoose=require('mongoose');
const app=new express();
const cors=require('cors')

app.use(express.json());
app.use(cors());
const adminRouter=require('./routes/adminRoute');
app.use('/admin',adminRouter);
const userRouter=require('./routes/userRoute');
app.use('/user',userRouter)
mongoose.connect('mongodb+srv://priyapremlal2015:priyaprem2015@cluster0.dsakey1.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

  


  app.listen(4000,()=>{
    console.log("listening to the port 4000")
})
