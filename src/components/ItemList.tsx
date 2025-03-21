import React from 'react'
import { Textarea } from "@/components/ui/textarea"

export function ItemList() {
  return (
    <div className="h-[500px]">
      <Textarea 
        placeholder="Please paste your list of items here"
        className="w-full h-full resize-none"
      />
    </div>
  )
} 