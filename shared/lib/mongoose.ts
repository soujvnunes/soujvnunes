import { attachDatabasePool } from '@vercel/functions'
import { connect, type Connection, type Mongoose } from 'mongoose'

const defaultMongoose = {
  conn: null as Connection | null,
  promise: null as Promise<Mongoose> | null,
  poolAttached: false,
}

declare global {
  var mongoose: typeof defaultMongoose
}

let cached = global.mongoose

if (!cached) cached = global.mongoose = defaultMongoose

export const connectMongo = async () => {
  const MONGODB_URI = process.env.MONGODB_URI

  if (!MONGODB_URI) throw Error('Missing database environment variable')

  if (cached.conn) return cached.conn

  cached.promise ??= connect(MONGODB_URI, {
    bufferCommands: false,
    maxPoolSize: 10, // Limit connections per lambda to prevent exhaustion
    serverSelectionTimeoutMS: 5000, // Fail fast if DB is down
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    },
  }).then((mongoose) => mongoose)

  try {
    const mongoose = await cached.promise

    cached.conn = mongoose.connection

    if (!cached.poolAttached && mongoose.connection.getClient()) {
      attachDatabasePool(mongoose.connection.getClient()) // Attach the MongoDB client to Vercel's Fluid Compute for proper connection management
      cached.poolAttached = true
    }
  } catch (error) {
    cached.promise = null

    throw error
  }

  return cached.conn
}

export const getMongoClient = async () => {
  const conn = await connectMongo()

  return conn.getClient()
}

export const getMongoDB = async () => {
  const client = await getMongoClient()

  return client.db()
}
