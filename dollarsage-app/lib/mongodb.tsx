import mongoose from 'mongoose';

const {MONGODB_URL} = process.env;

if (!MONGODB_URL) {
    throw new Error(`Invalid Mongo DB URL: ${MONGODB_URL}`);
}

export const connectToMongoDB = async () => {
    try {
        const {connection} = await mongoose.connect(MONGODB_URL)

        if (connection.readyState === 1)
    } catch (err) {
        
    }
}