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

export const connectMongoose = async () => {
  const MONGOOSE_URI = process.env.MONGOOSE_URI

  if (!MONGOOSE_URI) throw Error('Missing environment variable')

  if (cached.conn) return cached.conn

  cached.promise ??= connect(MONGOOSE_URI, {
    bufferCommands: false,
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    },
  }).then((mongoose) => mongoose)

  try {
    const mongoose = await cached.promise

    cached.conn = mongoose.connection

    // Attach the MongoDB client to Vercel's Fluid Compute for proper connection management
    if (!cached.poolAttached && mongoose.connection.getClient()) {
      attachDatabasePool(mongoose.connection.getClient())
      cached.poolAttached = true
    }
  } catch (error) {
    cached.promise = null

    throw error
  }

  return cached.conn
}
