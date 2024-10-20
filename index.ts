import express, {Application, Request, Response} from "express" ;
import morgan from "morgan";
    
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001; 
const app: Application = express(); 

app.use(morgan("tiny"));
app.use(express.json());

//app.use('/api/v1/users', authenticateKey, userRoutes);
//app.use('/api/v1/users', userRoutes);
//app.use('/api/v1/gradeHistories', gradesRoutes);

app.get("/ping", async (_req : Request, res: Response) => { 
    res.send({ 
        message: "hello from Una", 
    }); 
}); 

app.listen(PORT, () => { 
    console.log("Server is running on port  --", PORT); 
}); 



 