import express, {Application, Request, Response} from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"


//Routes
import User from "./route/User"



class App {

    public app: Application

    constructor(){
        this.app = express()
        this.routes()
        this.plugin()
    }

    protected plugin(): void{        
        this.app.use(morgan("dev"))
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(compression())        
    }

    protected routes(): void{
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use("/api/v1/users", User)        
    }
}
const port = 8000
const app = new App().app
app.listen(port, () =>{
    console.log("Running on +", port);
    
})

