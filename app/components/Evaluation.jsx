import React, { useEffect, useState } from 'react'
import { createPortal } from "react-dom";

export default function Evaluation({ tasks, isTasksStatusChanged }) {

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


    const [showTasksDone, setShowTasksDone] = useState(false);

    useEffect(() => {
        if (isTasksStatusChanged)
            if (widthOfTheLine == "100%") {
                setTimeout(() => {
                    setShowTasksDone(true);
                }, 200);
            }
            else {
                setShowTasksDone(false);
            }
    }, [widthOfTheLine])

    const size = 68, strokeWidth = 4.5;

    const percentage = data.totalNumber === 0 ? 0 : Math.round((data.completedTasks / data.totalNumber) * 100);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <>
            <div className='evaluation py-3 px-5 rounded-[8px] flex items-center gap-3' style={{ border: "1px solid var(--border-color)" }}>
                <div className='flex-1 text-center'>
                    <span className='text-[22px] leading-[1] text-[#ffffffeb]' style={{ fontFamily: '"Mystery Quest", system-ui' }}>It’s time to achieve your goals!</span>
                    <div className='progress h-[5px] bg-[#ffffff42] rounded-4xl mt-2.5 relative'>
                        <span className='absolute top-0 left-0 w-0 h-full rounded-4xl bg-[#a855f7]' style={{ width: widthOfTheLine, animation: widthOfTheLine == "100%" ? 'scale-line 0.75s' : '' }}></span>
                    </div>
                </div>
                {/* <div className='bg-[#463e6f] min-w-[60px] min-h-[60px] rounded-[50%] flex justify-center items-center tracking-[5px] aspect-[1/1] p-[8px] font-[700]'>
                    {data.completedTasks}/{data.totalNumber}
                </div> */}

                {/* <div className={`relative flex items-center justify-center ${className}`}> */}
                <div className={`relative flex items-center justify-center **:!font-[Lora] **:[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] **:!duration-[1s]`} >
                    <svg
                        width={size}
                        height={size}
                        className="transform -rotate-90 overflow-visible rounded-full " style={{ boxShadow: "0 0 10px 3px #ffffff4d" }}
                    >
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius + 3}
                            fill="none"
                            stroke="#edc77a"
                            strokeWidth={strokeWidth / 2}
                            strokeOpacity="0.5"
                        />
                        {/* totalNumber */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke="#634976"
                            strokeWidth={strokeWidth}
                        />

                        {/* completedTasks */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke="#edc77a"           // لون بنفسجي فاخر
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            className="transition-all duration-500 ease-out"
                        />
                    </svg>

                    {/* النص في المنتصف */}
                    <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-[34px] font-semibold text-[#e4b474] tracking-tight">
                            {data.completedTasks}
                        </span>

                    </div>

                    <div className='absolute right-[-14] bottom-[-1.5px] rounded-full p-[5]'
                        style={{ background: "linear-gradient(135deg, #7b3d6e, #391f45)", boxShadow: "0 0 2px #ffffff5c" }}
                    >
                        <span className="text-xs font-medium -mt-1 text-[18px] flex justify-center items-center gap-[1] p-[2.5px] leading-[1]">
                            <span className='inline-block text-[16px]' style={{ fontFamily: 'cursive!important' }}>/</span>{data.totalNumber}
                        </span>
                    </div>
                </div>
            </div>

            {
                showTasksDone && createPortal(<div className="nice-message show min-w-[350px]">🚀 Tasks Completed!</div>, document.getElementById("hidden-items---"))
            }
            
        </>
    )
}
