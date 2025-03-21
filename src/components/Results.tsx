import { Button } from "@/components/ui/button"
import { ResultsTable } from "./ResultsTable"
import { Play } from "lucide-react"

export function Results() {
  return (
    <div className="flex items-center gap-4 h-[500px]">
      <div className="flex items-center">
        <Button variant="outline" size="icon" className="w-12 h-12">
          <Play className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex-1">
        <ResultsTable />
      </div>
    </div>
  )
} 