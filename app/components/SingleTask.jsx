import React, { useEffect, useState } from 'react'
import ChechBoxStyle from './ChechBoxStyle'
import DeleteSvg from '../svgs/DeleteSvg'
import EditSvg from '../svgs/EditSvg'
import EditTaskModal from './EditTaskModal'
import DeleteTaskModal from './DeleteTaskModal'

export default function SingleTask({ task, setTasks }) {
    const [openEdit, setOpenEdit] = useState();

    function toggleEditModal() {
        setOpenEdit(!openEdit);
    }

    const [openDelete, setOpenDelete] = useState();

    function toggleDeleteModal() {
        setOpenDelete(!openDelete);
    }

    return (
        <>
            <div className={`single-task ${task?.checked ? "checked" : ""} flex justify-between gap-4 mb-4 bg-[#ffffff23] py-[3.5px] px-3 rounded-4xl`}>
                {/* first part */}
                <div className='flex justify-center items-center w-full'>
                    <ChechBoxStyle setTasks={setTasks} checked={task.checked} value={task?.text} task={task} />
                </div>

                {/* second part - tools */}
                <div className='task-tools flex items-center gap-1.5 '>
                    <button className='edit-btn p-1 rounded-full' onClick={toggleEditModal}>
                        <EditSvg />
                    </button>
                    <button className='delete-btn' onClick={toggleDeleteModal}>
                        <DeleteSvg />
                    </button>
                </div>
            </div>

            {/* Modals */}
            <EditTaskModal open={openEdit} toggleModal={toggleEditModal} setTasks={setTasks} task={task} />
            <DeleteTaskModal open={openDelete} toggleModal={toggleDeleteModal} setTasks={setTasks} task={task} />

        </>
    )
}
