import React from 'react'
import Table from './Table'

const Workshop = () => {
    return (
        <>
            <div>Workshop</div>
            <Table data={[
                {
                    "id": "1",
                    "name": "Aaron Miles",
                    "email": "aaron@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "2",
                    "name": "Aishwarya Naik",
                    "email": "aishwarya@mailinator.com",
                    "role": "member"
                },
                {
                    "id": "3",
                    "name": "Arvind Kumar",
                    "email": "arvind@mailinator.com",
                    "role": "admin"
                }
            ]} />
        </>
    )
}

export default Workshop