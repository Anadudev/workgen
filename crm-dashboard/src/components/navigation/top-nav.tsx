import { icons } from '@/lib/data/top-nav'
import { Grip } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const TopNav = () => {
  return (
    <div className='fixed z-50 bg-slate-900 w-full top-0 left-0'>
      <div className='flex flex-col items-center sm:flex-row justify-between p-4'>
        <div className='text-slate-300 flex space-x-4'>
          <Link href={'/'} className=''>
            <Grip />
          </Link>
          <div className='inline-flex space-x-2'>
            <div className=''>
              Dynamics 365
            </div>
            <div className="border border-slate-500"></div>
            <div className=''>
              sales hub
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          {icons.map((icon, index) => (
            <div className='text-white' key={index}><icon.icon className='text-slate-300 cursor-pointer' /></div>))}
          <div className='text-white'>John Doe</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='w-8 cursor-pointer h-8 rounded-full bg-primary relative'>
                <div className="bg-green-600 border size-3 absolute right-0 bottom-0 rounded-full"></div>
              </div>
              {/* <Button variant="outline">Open</Button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className='text-center'>Profile Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default TopNav
