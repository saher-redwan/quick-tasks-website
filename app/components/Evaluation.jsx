import React, { useEffect, useState } from 'react'

export default function Evaluation({ tasks }) {

    const [data, setData] = useState({ totalNumber: 0, completedTasks: 0 });

    const [widthOfTheLine, setWidth] = useState(0);

    useEffect(() => {
        setData(prev => ({ ...prev, totalNumber: tasks.length }))

        let num = 0;
        tasks?.forEach(element => {
            element?.checked && num++

            setData(prev => ({ ...prev, completedTasks: num }))
        });
    }, [tasks])

    useEffect(() => {
        setWidth((data.completedTasks / data.totalNumber) * 100 + "%")
    }, [data])

    return (
        <div className='evaluation p-3 rounded-[8px] flex items-center gap-3' style={{ border: "1px solid var(--border-color)" }}>
            <div className='flex-1'>
                <span className='font-bold'>Keep It Up!</span>
                <div className='progress h-[5px] bg-[#ffffff42] rounded-4xl mt-2.5 relative'>
                    <span className='absolute top-0 left-0 w-0 h-full rounded-4xl bg-[#463e6f]' style={{ width: widthOfTheLine, boxShadow: "2px 1px 5px #f98061", animation: widthOfTheLine == "100%" ? 'scale-line 0.75s' : '' }}></span>
                </div>
            </div>
            <div className='bg-[#463e6f] min-w-[60px] min-h-[60px] rounded-[50%] flex justify-center items-center tracking-[5px] aspect-[1/1] p-[8px] font-[700]'>
                {data.completedTasks}/{data.totalNumber}
            </div>
        </div>
    )
}
