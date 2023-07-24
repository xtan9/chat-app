import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEnv(name: string) {
  const val = process.env[name];
  if (!val) throw new Error("missing env var for " + name);
  return val;
}
