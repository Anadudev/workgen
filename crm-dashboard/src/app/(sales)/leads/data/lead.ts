import { FolderLock, Calculator, Mail } from "lucide-react";
import { RiGeminiFill } from "react-icons/ri";


export const targetColors = [
    { color: "bg-green-300", width: "w-[30%]" },
    { color: "bg-blue-300", width: "w-[20%]" },
    { color: "bg-pink-300", width: "w-[10%]" },
    { color: "bg-yellow-300", width: "w-[5%]" },
    { color: "bg-gray-300", width: "w-[50%]" },
];

export const Activities = [
    {
        image: "https://i.pinimg.com/736x/77/b6/f9/77b6f9f5b9842a9bceedd3980f219e46.jpg",
        title: "Cafe A 1100 for Woodland Bank",
        subtitle: "Woodland Bank . $280,000 . 8 days to close",
        action: "Review draft and reply to Chris Nadio",
        icon: FolderLock,
        aiIcon: RiGeminiFill,
    },
    {
        image: "https://i.pinimg.com/736x/77/b6/f9/77b6f9f5b9842a9bceedd3980f219e46.jpg",
        title: "Partnership opportunity for Farikam",
        subtitle: "Fabrican . $280,000 . 8 days to close",
        action: "Review draft and reply to Chris Nadio",
        icon: Calculator,
        aiIcon: RiGeminiFill,
    },
];

export const leadCustomers = [
    {
        image: "https://i.pinimg.com/736x/fa/c8/db/fac8db79face0f109e0195c52688073c.jpg",
        name: "Jane Rayes",
        title: "COO . Netherlands Traders",
        icon: Mail,
        subtitle: 'Engage with Jane Rayes',
        summery: "Jane may be interested in upgrading espresso machines for her in store coffee shops.",
        footer: "Expand business . High buying intent",
    },
    {
        image: "https://i.pinimg.com/736x/fa/c8/db/fac8db79face0f109e0195c52688073c.jpg",
        name: "Allen Munger",
        title: "Head of Real EState Development . Contoso Coffee",
        subtitle: 'Prepare for a meeting Allen',
        icon: Calculator,
        summery: "Preparing for high-buying intent meeting Copilot scheduled for 2pm regarding upgrading service contract.",
        footer: "Upcoming meeting . Due today",
    }
];
