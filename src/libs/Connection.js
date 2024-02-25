import mongoose from 'mongoose'
import { DATABASE_URL } from '../config'

export default class Connection {
    static async connect() {
        await mongoose.connect(DATABASE_URL)
            .then(() => {
                console.log("Connected successfully to database")
            })
            .catch((error) => {
                console.error(`there was a errror connecting to database\n${error}`)
            })
    }
}