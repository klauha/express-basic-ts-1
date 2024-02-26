import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708945395865 } from "./migrations/1708945395865-roles"
import { Users1708948453211 } from "./migrations/1708948453211-users"
import { Authors1708949863979 } from "./migrations/1708949863979-authors"
import { Books1708950559729 } from "./migrations/1708950559729-books"
import { BookFavorite1708956959128 } from "./migrations/1708956959128-book_favorite"
import { Loans1708958427909 } from "./migrations/1708958427909-loans"

export const AppDataSource = new DataSource({
type: "mysql",
host:process.env.DB_HOST||"localhost",
port:Number (process.env.DB_PORT||3306),
username: process.env.DB_USER|| "root",
password:process.env.DB_PASSWORD|| "",
database: process.env.DB_DATABASE||"test",
entities: [],
migrations: [Roles1708945395865, Users1708948453211, Authors1708949863979, Books1708950559729,BookFavorite1708956959128,Loans1708958427909],
synchronize: false,
logging: false,
})