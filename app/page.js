import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hi</h2>
      <Button variant="destrctive">Click me</Button>
      <UserButton />
    </div>
  );
}
