import express, { Application, Request, Response } from "express";
import Database from "./config/database";

class App {
    public app: Application
    
    constructor() {
        this.app = express()
        this.databaseSync()
        this.routes()
    }

    protected databaseSync():void{
        const db = new Database()
        db.sequelize?.sync()
      }

    protected routes(): void {
        this.app.route("/hello").get((req:Request, res:Response) => {
            res.send("welcome home")
        })
    }
}

const port: number = 8000

const app = new App().app

app.listen(port, ()=> {
    console.log(`servidor rodando na porta ${port}`)
})
