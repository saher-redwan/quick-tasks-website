'use client'

import React, { useState } from 'react'
import SingleTask from './SingleTask'

export default function Tasks() {

    const [tasks, setTasks] = useState([...Array(0)]);


    return (
        <div className='mt-8'>

            {tasks.map((_, index) => {
                return <SingleTask key={index} />
            })}

            {
                tasks.length == 0 &&
                <div className='text-center'>
                    No Tasks Yet!
                </div>
            }

        </div>
    )
}
