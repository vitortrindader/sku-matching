import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ResultsTable() {
  return (
    <div className="w-full h-[500px] overflow-auto border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Your Items</TableHead>
            <TableHead>SKUs</TableHead>
            <TableHead>Accuracy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Placeholder rows will be populated with actual data later */}
          <TableRow>
            <TableCell className="text-muted-foreground">Items will appear here...</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
} 