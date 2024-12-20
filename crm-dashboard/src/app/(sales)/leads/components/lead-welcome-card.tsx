import React from 'react'
import '../../../custom.css'
import { Brain } from 'lucide-react'
import { targetColors, Activities, leadCustomers } from '@/app/(sales)/leads/data/lead'
import Image from 'next/image'

const LeadWelcomeCard = () => {
    return (
        <div className="neon-border">
            Lead Welcome Card
            <div className="rounded-[1.6rem] p-[2px] bg-gradient-to-b from-blue-500 to-purple-500 shadow-lg w-full">
                <div className="">
                    <div className="bg-white p-5 rounded-3xl w-full space-y-5">
                        <div className="grid grid-cols-2 items-center justify-between">
                            <p className="flex gap-x-2 items-center font-semibold text-lg">
                                <Brain className='size-7 ' />
                                <p className="">
                                    Hi Mona, <span className='text-blue-500'>68%</span>   of goal achieved and rest can be achieved by focusing on 20 top leds.
                                </p>
                            </p>
                            <div className="flex w-full overflow-hidden h-[10px] border rounded-full">
                                {targetColors.map((item, index) => (<div key={index} className={`${item.color} ${item.width}`}></div>))}
                            </div>
                        </div>
                        <div className="flex">
                            <div className="space-y-3">
                                <p className="">Copilot has pointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus</p>
                                <div className="flex gap-2 flex-1">
                                    {leadCustomers.map((item, index) => <div key={index} className="rounded-2xl shadow-md p-4 border w-full">
                                        <div className="flex gap-2">
                                            <div className="relative overflow-hidden size-8 rounded-full "><Image src={item.image} alt='' fill /></div>
                                            <div className="">
                                                <h3>{item.name}</h3>
                                                <p className='text-sm text-slate-400'>{item.title}</p>
                                            </div>
                                        </div>
                                        <div className="rounded-xl p-3 bg-gradient-to-r from-blue-200 to-blue-100 space-y-3">
                                            <div className="flex gap-2">
                                                <item.icon />
                                                <p className="">{item.subtitle}</p>
                                            </div>
                                            <div className="">{item.summery}</div>
                                        </div>
                                        <small className='text-slate-400'>{item.footer}</small>
                                    </div>)}
                                </div>
                            </div>
                            <div className="border-l-2 border-gray-300 mx-2"></div>
                            <div className="border-gray-200 flex-2 w-2/5">
                                <div className="p-2 space-y-2">
                                    <p>Other key activities</p>
                                    {Activities.map((item, index) => <div key={index} className="rounded-2xl shadow-md py-2 px-3 w-full">
                                        <div className="">
                                            <div className="flex gap-2">
                                                <div className="size-7 overflow-hidden rounded-full relative">
                                                    <Image alt='' fill src={item.image} />
                                                </div>
                                                <div className="">
                                                    <h3 className='font-bold'>{item.title}</h3>
                                                    <p className="text-sm">{item.subtitle}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between gap-2 items-center">
                                                <div className="flex bg-slate-100 px-2 gap-2 py-1 w-full rounded">
                                                    <item.icon /><p>{item.action}</p>
                                                </div>
                                                <item.aiIcon />
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadWelcomeCard;
