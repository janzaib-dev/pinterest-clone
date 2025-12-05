import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected')
    }catch (e) {
        console.log('mongodb connection error:',e)
    }
}

export default connectDB