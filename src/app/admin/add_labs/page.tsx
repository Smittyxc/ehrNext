import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddLabs() {
  return ( 
    <div className="w-full p-4">
      <p>Enter the number of days, hours, and minutes in the past the labs will display</p>
      <div className="flex gap-4 w-10">
        <Label htmlFor="days">Days</Label>
        <Input id="days" className="w-8" />
        <Input className="w-8"/>
        <Input className="w-8"/>
      </div>
      
      
    </div>
  )
}