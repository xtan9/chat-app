import { Redis } from "@upstash/redis";
import { getEnv } from "./utils";

export const db = new Redis({
  url: getEnv("UPSTASH_REDIS_REST_URL"),
  token: getEnv("UPSTASH_REDIS_REST_TOKEN")!,
});
