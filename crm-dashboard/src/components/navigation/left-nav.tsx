"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { sidenavItems, SidenavItem } from '@/lib/data/sidenav'
// dropdown imports
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from '@/lib/utils'


export function CustomTrigger({ className }: { className?: string }) {
    const { toggleSidebar } = useSidebar()

    return <span onClick={toggleSidebar} className={cn('size-fit text-xl cursor-pointer', className)}>
        <Menu className='lg' />
    </span>
}

const Sidenav = () => {
    const pathname = usePathname();
    const { open } = useSidebar();
    return (
        <>
            <CustomTrigger className={`mt-16 ${open ? 'hidden' : ''}`} />
            <Sidebar>
                <SidebarHeader />
                <SidebarContent className=''>
                    <SidebarGroup />
                    <SidebarContent>
                        <CustomTrigger className='pl-4 mt-9' />
                        <SidebarMenu className='space-y-4'>
                            {sidenavItems.map((section, index) => (
                                <SidebarMenuItem key={index}>
                                    <div className="flex items-center space-x-2">
                                        <div className={`h-full px-[2px] rounded-full  ${pathname == section.title ? ' bg-primary' : ''}`}></div>
                                        <div className="font-semibold">{section?.title}</div>
                                    </div>
                                    <div className="space-y-1">
                                        {section?.items.map((item: SidenavItem, index) => (
                                            <SidebarMenuItem key={index}>
                                                {
                                                    item?.children ? <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <SidebarMenuButton asChild>
                                                                <div className="cursor-pointer">
                                                                    <div className={`h-full px-[2px] rounded-full  ${pathname == item.href ? ' bg-primary' : ''}`}></div>
                                                                    <item.icon />
                                                                    <span>{item.name}</span>
                                                                    <ChevronDown className="ml-auto" />
                                                                </div>
                                                            </SidebarMenuButton>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                                            {item.children.map((child: SidenavItem, index: number) => (
                                                                <DropdownMenuItem asChild key={index}>
                                                                    <Link href={child.href} className='flex'>
                                                                        <div className={`h-full px-[2px] rounded-full  ${pathname == child.href ? ' bg-primary' : ''}`}></div>
                                                                        <child.icon size={16} className='mr-2' />
                                                                        <span>{child.name}</span>
                                                                    </Link>
                                                                </DropdownMenuItem>
                                                            ))}
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                        :
                                                        <SidebarMenuButton asChild>
                                                            <Link href={item.href}>
                                                                <div className={`h-full px-[2px] rounded-full  ${pathname == item.href ? ' bg-primary' : ''}`}></div>
                                                                <item.icon />
                                                                <span>
                                                                    {item.name}
                                                                </span>
                                                            </Link>
                                                        </SidebarMenuButton>}
                                            </SidebarMenuItem>
                                        ))}
                                    </div>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </>
    )
}

export default Sidenav
