import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

// i want to have 5 requests in 30 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "30 s")
});


export default ratelimit;