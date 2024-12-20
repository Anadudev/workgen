import React from "react";
import "../../../custom.css";
import { Brain, CircleDot, Minus } from "lucide-react";
import {
  targetColors,
  Activities,
  leadCustomers,
} from "@/app/(sales)/leads/data/lead";
import Image from "next/image";

const LeadWelcomeCard = () => {
  return (
    <div className="neon-border">
      Lead Welcome Card
      <div className="rounded-[1.6rem] p-[2px] bg-gradient-to-b from-blue-500 to-purple-500 shadow-lg w-full">
        <div className="">
          <div className="bg-white p-5 rounded-3xl w-full space-y-5 max-h-[600px] overflow-y-auto">
            <div className="grid gap-3 md:grid-cols-2 items-center justify-between">
              <p className="flex gap-x-2 items-center font-semibold text-lg">
                <Brain className="size-7 " />
                <p className="">
                  Hi Mona, <span className="text-blue-500">68%</span> of goal
                  achieved and rest can be achieved by focusing on 20 top leds.
                </p>
              </p>
              <div className="text-slate-500 space-y-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <CircleDot className="size-4" />
                    <small>1 month until Q4 ends</small>
                  </div>
                  <div className="flex gap-2 items-center">
                    {/* <Minus className="rotate-90" /> */}
                    <div className="border h-9 -mb-5 border-black z-10"></div>
                    <div className="flex justify-between items-center">
                      <small>
                        Target{" "}
                        <span className="font-semibold text-black">
                          $45 million
                        </span>
                      </small>
                      <small>68% target achieved</small>
                    </div>
                  </div>
                </div>
                <div className="flex w-full overflow-hidden h-[10px] border rounded-full">
                  {targetColors.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} ${item.width}`}
                    ></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {targetColors.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <div
                        className={`${item.color} size-3 rounded-full`}
                      ></div>
                      <small className="text-slate-500">{item.legend}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-2">
              <div className="space-y-3">
                <p className="">
                  Copilot has pointed 20 key leads that show strong purchase
                  intent and are actively engaging. These leads need your focus
                </p>
                <div className="flex gap-2 flex-1 flex-wrap md:flex-nowrap">
                  {leadCustomers.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl shadow-md p-4 border w-full"
                    >
                      <div className="flex gap-2">
                        <div className="relative overflow-hidden size-8 rounded-full ">
                          <Image src={item.image} alt="" fill />
                        </div>
                        <div className="">
                          <h3>{item.name}</h3>
                          <p className="text-sm text-slate-400">{item.title}</p>
                        </div>
                      </div>
                      <div className="rounded-xl p-3 bg-gradient-to-r from-blue-200 to-transparent space-y-3">
                        <div className="flex gap-2">
                          <item.icon />
                          <p className="text-sm font-semibold">
                            {item.subtitle}
                          </p>
                        </div>
                        <div className="text-slate-600 text-sm">
                          {item.summery}
                        </div>
                      </div>
                      <small className="text-slate-400">{item.footer}</small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-gray-300 mx-2"></div>
              <div className="border-gray-200 flex-2 w-full lg:w-1/3">
                <div className="p-2 space-y-2">
                  <p>Other key activities</p>
                  {Activities.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl shadow-md py-2 px-3 w-full"
                    >
                      <div className="">
                        <div className="flex gap-2">
                          <div className="size-7 overflow-hidden rounded-full relative">
                            <Image alt="" fill src={item.image} />
                          </div>
                          <div className="">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm">{item.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex justify-between gap-2 items-center">
                          <div className="flex bg-slate-100 px-2 gap-2 py-1 w-full rounded">
                            <item.icon />
                            <p>{item.action}</p>
                          </div>
                          <item.aiIcon />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadWelcomeCard;
