import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const MONGO_HOST = process.env.MONGODB_HOST;
const DB_NAME = process.env.DATABASE_NAME;

if (!MONGO_HOST || !DB_NAME) {
  throw new Error(
    "Please define MONGO_DB host and database variables in environment"
  );
}

const MONGO_URI = `${MONGO_HOST}/${DB_NAME}`;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts).then((conn) => conn);
  }
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}
