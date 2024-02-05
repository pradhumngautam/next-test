import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      home
      <Button variant={"default"} size={"sm"} className="text-lg hover:text-blue-500">
        hello
      </Button>
    </main>
  );
}
