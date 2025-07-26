// lib/mongo.ts

/* eslint-disable no-undef */
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env");
}

// Extend global type to support _mongoClientPromise
declare global {
   
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Ensure global._mongoClientPromise is available
const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let client: MongoClient;
if (!globalWithMongo._mongoClientPromise) {
  client = new MongoClient(uri);
  globalWithMongo._mongoClientPromise = client.connect();
}

const clientPromise = globalWithMongo._mongoClientPromise!;

export default clientPromise;


