import React from 'react'

export default function Evaluation() {
    return (
        <div className='evaluation p-3 rounded-[8px] flex items-center gap-3' style={{ border: "1px solid var(--border-color)" }}>
            <div className='flex-1'>
                <span className='font-bold'>Keep It Up!</span>
                <div className='progress h-[5px] bg-[#ffffff42] rounded-4xl mt-2.5 relative'>
                    <span className='absolute top-0 left-0 w-0 h-full rounded-4xl bg-[#463e6f]' style={{ width: `calc(${50}%)`, boxShadow: "2px 1px 5px #f98061" }}></span>
                </div>
            </div>
            <div className='bg-[#463e6f] min-w-[60px] min-h-[60px] rounded-[50%] flex justify-center items-center tracking-[5px] aspect-[1/1] p-[8px] font-[700]'>
                2/3
            </div>
        </div>
    )
}
