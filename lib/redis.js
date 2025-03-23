import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// Test the connection
redis
  .ping()
  .then((result) => {
    console.log("Redis connected:", result); // Should print "Redis connected: PONG"
  })
  .catch((err) => {
    console.error("Redis connection error:", err);
  });
