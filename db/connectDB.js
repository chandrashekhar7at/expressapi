import mongoose from "mongoose"

mongoose.set('strictQuery',false)

const connectDB = async (DATABASE_URL)=>{
    try {
        const dbOptions = {
            user : process.env.user,
            pass:process.env.pass,
            dbname : process.env.dbname,
            authSource:process.env.authSource
        }
        const conn = await mongoose.connect(DATABASE_URL)
        console.log('connected')
    } catch (error) {
        console.log('connection failed',error)
    }
}
export default connectDB



