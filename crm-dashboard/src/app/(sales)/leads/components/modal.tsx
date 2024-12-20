// "use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Brain, LucideIcon, Mail, Pencil, SendHorizontal } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { PiButterfly } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { whyBadge, whyPick } from "@/app/(sales)/leads/data/lead";

export interface LeadModalProps {
  name: string;
  title: string;
  social?: unknown;
  subtitle: string;
  summery: string;
  footer: string;
  image: string;
  Icon: LucideIcon;
}
const LeadModal: React.FC<LeadModalProps> = ({
  name,
  social,
  title,
  subtitle,
  summery,
  footer,
  image,
  Icon,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <div className="flex gap-2">
            <div className="relative overflow-hidden size-8 rounded-full ">
              <Image src={image} alt="" fill />
            </div>
            <div className="">
              <h3>{name}</h3>
              <p className="text-sm text-slate-400">{title}</p>
            </div>
          </div>
          <div className="rounded-xl p-3 bg-gradient-to-r from-blue-200 to-blue-50 space-y-3">
            <div className="flex gap-2">
              <Icon />
              <p className="text-sm font-semibold">{subtitle}</p>
            </div>
            <div className="text-slate-600 text-sm">{summery}</div>
          </div>
          <small className="text-slate-400">{footer}</small>
        </div>
      </DialogTrigger>
      <DialogContent
        // asChild
        className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 p-[2px] rounded-xl"
      >
        <div className="bg-slate-100 rounded-md p-4">
          <DialogHeader>
            <DialogTitle>
              <div className="inline-flex items-center gap-2">
                <Mail /> Engage with {name}
              </div>
            </DialogTitle>
            <Separator />
            <DialogDescription asChild>
              <div className="">
                <div className="bg-white rounded-xl py-2 p-4 flex gap-2 items-center">
                  <div className="relative size-14 rounded-full">
                    <div className="relative overflow-hidden size-full rounded-full">
                      <Image src={image} alt="" fill />
                    </div>
                    <PiButterfly className="bg-orange-600 absolute z-50 bottom-0 right-0 text-white p-px border rounded-full size-5" />
                  </div>
                  <div className="text-black">
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex gap-2">
                      <FaLinkedin className="size-5 text-blue-800" />
                      <Separator orientation="vertical" className="border" />
                      <p className="text-sm text-slate-600">{title}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl py-2 p-4">
                  <div className="bg-gradient-to-r from-blue-200 to-purple-100 p-2 rounded-xl flex justify-between items-center">
                    <div className="flex gap-2">
                      <Brain className="size-7" />
                      <p className="text-sm">{summery}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size={"sm"}>
                        <Pencil />
                        Edit
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-slate-300"
                        variant="outline"
                        size={"sm"}
                      >
                        <SendHorizontal />
                        Approve and send
                      </Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="shadow-md rounded px-4 py-2 pb-0 flex h-12 gap-2 items-end">
                      <div className="pb-2 cursor-pointer">Engage</div>
                      <div className="pb-2 border-b-4 border-primary font-bold cursor-pointer">
                        Research
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-50 p-4 rounded-xl">
                        <div className="text-xl font-semibold">
                          Why i picked this lead
                        </div>
                        <div className="text-black">
                          <ul className="list-disc pl-6">
                            {whyPick.map((item, index) => (
                              <li key={index} className="">
                                <div
                                  dangerouslySetInnerHTML={{ __html: item.why }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="">
                          <div className="flex gap-2">
                            {whyBadge.map((item, index) => (
                              <div
                                key={index}
                                className="flex gap-2 items-center p-4 shadow-sm bg-white rounded-xl"
                              >
                                <div className="relative overflow-hidden size-12">
                                  <Image alt="" fill src={item.image} />
                                </div>
                                <div className="">
                                  <div className="">Decision Maker</div>
                                  <div className="">yes</div>
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
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;
