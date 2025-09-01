"use client"

import SingleTask from "./SingleTask"

export default function Tasks({ tasks, setTasks }) {

    return (
        <div className='mt-8'>
            {
                tasks?.sort((a, b) => b.time - a.time)?.map((task) => {
                    return <SingleTask key={task.time} task={task} setTasks={setTasks} />
                })
            }

            {
                tasks?.length == 0 &&
                <div className='text-center' style={{ animation: "scale-line 2s" }}>
                    No Tasks Yet!
                </div>
            }
        </div>
    )
}
