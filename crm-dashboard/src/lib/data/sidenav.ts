import { House, X, Clock, Pin, Rocket, LayoutDashboard, ClipboardCheck, Folders, UserRound, MonitorCog, DoorOpen, BookUser, FileClock, FileText, FileSpreadsheet, Box, Calculator, FileChartColumn, Volume2, LucideIcon } from "lucide-react"


export interface SidenavItem {
    name: string;
    href: string;
    icon: LucideIcon;
    children?: SidenavItem[];
}

export interface SidenavSection {
    title?: string;
    icon: LucideIcon;
    items: SidenavItem[];
}

export const sidenavItems = [
    {
        // title: "Home",
        icon: House,
        items: [
            {
                name: "Home",
                href: "/",
                icon: House,
            },
            {
                name: "Recent",
                href: "/recent",
                icon: Clock,
                children: [
                    {
                        name: "Recent 1",
                        href: "/recent/1",
                        icon: X,
                    },
                    {
                        name: "Recent 2",
                        href: "/recent/2",
                        icon: X,
                    },
                ]
            },
            {
                name: "Pined",
                href: "/pined",
                icon: Pin,
                children: [
                    {
                        name: "Pined 1",
                        href: "/pined/1",
                        icon: X,
                    },
                    {
                        name: "Pined 2",
                        href: "/pined/2",
                        icon: X,
                    },
                ]
            },
        ],
    },
    {
        title: "My work",
        icon: X,
        items: [
            {
                name: "Sales accelerator",
                href: "/sales-accelerator",
                icon: Rocket,
            },
            {
                name: "Dashboards",
                href: "/dashboards",
                icon: LayoutDashboard,
            },
            {
                name: "Activities",
                href: "/activities",
                icon: ClipboardCheck,
            },
        ],
    },
    {
        title: "Customers",
        icon: X,
        items: [
            {
                name: "Accounts",
                href: "/accounts",
                icon: Folders,
            },
            {
                name: "Contacts",
                href: "/contacts",
                icon: UserRound,
            },
        ],
    },
    {
        title: "Sales",
        icon: X,
        items: [
            {
                name: "Leads",
                href: "/leads",
                icon: MonitorCog,
            },
            {
                name: "Opportunities",
                href: "/opportunities",
                icon: DoorOpen,
            },
            {
                name: "Competitors",
                href: "/competitors",
                icon: BookUser,
            },
        ],
    },
    {
        title: "Collateral",
        icon: X,
        items: [
            {
                name: "Quotes",
                href: "/quotes",
                icon: FileClock,
            },
            {
                name: "Orders",
                href: "/orders",
                icon: FileText,
            },
            {
                name: "Invoices",
                href: "/invoices",
                icon: FileSpreadsheet,
            },
            {
                name: "Products",
                href: "/products",
                icon: Box,
            },
            {
                name: "Sales Literature",
                href: "/sales-literature",
                icon: Calculator,
            },
        ],
    },
    {
        title: "Marketing",
        icon: X,
        items: [
            {
                name: "marketing lists",
                href: "/marketing-lists",
                icon: FileChartColumn,
            },
            {
                name: "Quick campaigns",
                href: "/quick-campaigns",
                icon: Volume2,
            },
        ],
    },
    {
        title: "Performance",
        icon: X,
        items: [
            {
                name: "marketing lists",
                href: "/marketing-lists",
                icon: FileChartColumn,
            },
            {
                name: "Quick campaigns",
                href: "/quick-campaigns",
                icon: Volume2,
            },
        ],
    },
]
