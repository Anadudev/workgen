import React from "react";
import DataTable from "@/components/table/data-table";
import { columns } from "@/app/(sales)/leads/components/columns";
import { leadTableData } from "@/app/(sales)/leads/data/lead";

const LeadTable = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={leadTableData} />
    </div>
  );
};

export default LeadTable;
