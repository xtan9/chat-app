import Button from "@/components/ui/Button";
import { db } from "@/lib/db";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  await db.set("hello", "hello");
  return (
    <main className="">
      <div className="text-red-500">Hello World</div>
      <Button>button</Button>
      <Button variant="ghost">button</Button>
    </main>
  );
}
