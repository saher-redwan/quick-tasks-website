import React from 'react'
import ChechBoxStyle from './ChechBoxStyle'
import DeleteSvg from '../svgs/DeleteSvg'
import EditSvg from '../svgs/EditSvg'

export default function SingleTask() {
    return (
        <div className='single-task flex justify-between gap-4 mb-4 bg-[#ffffff23] py-[3.5px] px-3 rounded-4xl'>
            {/* first part */}
            <div className='flex justify-center items-center'>
                <ChechBoxStyle value={'go now go now go now go now go now go now go now go now go now '} />
            </div>

            {/* second part - tools */}
            <div className='task-tools flex items-center gap-1.5 '>
                <button className='edit-btn p-1 rounded-full'>
                    <EditSvg />
                </button>
                <button className='delete-btn'>
                    <DeleteSvg />
                </button>
            </div>
        </div>
    )
}
