"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// Todo: define column type
export type Payment = {
  name: string;
  topic: string;
  status: string;
  createdOn: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "topic",
    header: "Topic",
  },
  {
    accessorKey: "status",
    header: "Status reason",
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created on
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
