import React from 'react'
import { icons } from '@/lib/data/right-nav'


const RightNav = () => {
    return (
        <div className='right-0 h-full  bg-slate-200 w-fit p-2'>
            <div className='space-y-4'>
                {icons.map((icon, index) => (
                    <div className='text-slate-800' key={index}><icon.icon className='cursor-pointer' /></div>))}
            </div>
        </div>
    )
}

export default RightNav
