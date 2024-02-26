import { Sequelize } from "sequelize";
import * as dotenv from "dotenv"
dotenv.config() 

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USERNAME = process.env.POSTGRES_USERNAME as string;
  private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

  constructor() {
    this.connectToPostgreSQL();
  }

  private async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      username: this.POSTGRES_USERNAME,
      password: this.POSTGRES_PASSWORD,
      dialect: "postgres",
    });

    this.sequelize
      .authenticate()
      .then(() => {
        console.log("conexao pg estabelecida");
      })
      .catch((err: Error) => {
        console.log("erro na conexao", err);
      });
  }
}

export default Database
