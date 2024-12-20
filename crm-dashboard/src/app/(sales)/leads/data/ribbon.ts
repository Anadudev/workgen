import { Image, List, Plus, RotateCcw, Trash2, ChartPie, ListFilter, Pencil } from "lucide-react"
import { BsMicrosoftTeams } from "react-icons/bs";


export const ribbonActions = [
    {
        name: 'Show cart',
        icon: Image,
        color: ''
    },
    {
        name: 'Focused view',
        icon: List,
        color: '#9EB3D1',
    },
    {
        name: 'New',
        icon: Plus,
        color: '#A0BDAA',
    },
    {
        name: 'Refresh',
        icon: RotateCcw,
    },
    {
        name: 'Collaborate',
        icon: BsMicrosoftTeams,
        color: '#4c4ea6'
    },
    {
        name: 'Delete',
        icon: Trash2,
        color: '',
    },
]

export const ribbonTabs = [
    {
        name: 'Smart data',
        icon: ChartPie,
    },
    {
        name: 'Edit filters',
        icon: ListFilter,
    },
    {
        name: 'Edit columns',
        icon: Pencil,
    },
]
