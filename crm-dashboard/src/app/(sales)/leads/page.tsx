import React from 'react'
import Ribbon from '@/app/(sales)/leads/components/ribbon'
import LeadWelcomeCard from '@/app/(sales)/leads/components/lead-welcome-card'
import LeadTable from '@/app/(sales)/leads/components/lead-table'

const LeadsPage = () => {
    return (
        <div className='w-full overflow-auto'>
            <Ribbon />
            <LeadWelcomeCard/>
            <LeadTable/>
        </div>
    )
}

export default LeadsPage
