import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ribbonActions, ribbonTabs } from "@/app/(sales)/leads/data/ribbon";

const Ribbon = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-white w-full overflow-auto gap-8">
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className={'flex space-x-4 cursor-pointer'}> <div className="">Open</div> <ChevronDown className="ml-auto" /></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-4">
        <div className="flex">
          {ribbonActions.map((action, index) => (
            <div className="" key={index}>
              <Button variant="outline" className="border-none"><action.icon style={{ color: action.color }} className="" />{action.name}</Button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {ribbonTabs.map((tab, index) => (
            <div className="" key={index}>
              <Button variant="outline" className=""><tab.icon /> {tab.name}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
