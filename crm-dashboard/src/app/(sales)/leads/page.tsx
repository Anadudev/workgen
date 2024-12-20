import React from 'react'
import Ribbon from '@/app/(sales)/leads/components/ribbon'
import LeadWelcomeCard from '@/app/(sales)/leads/components/lead-welcome-card'

const LeadsPage = () => {
    return (
        <div className='w-full overflow-auto'>
            <Ribbon />
            <LeadWelcomeCard/>
        </div>
    )
}

export default LeadsPage
