// Returning User: -> Schedule View (\schedules)
// New User: -> Schedule View (\schedules)

// make class blocks clickable to access more
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function SavedPlans() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex h-[calc(100vh-5rem)] flex-grow flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold md:text-6xl">Saved Plans Page</h1>
          <div className="text-blue-600">
            <Link href={"/schedules"}>Schedule View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
