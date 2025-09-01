import React, { useState } from 'react'
import Modal from './custom_ui/Modal'
import { Button } from '@/components/ui/button'

export default function DeleteTaskModal({ open, toggleModal, setTasks, task }) {

    function deleteTask() {
        setTasks((prev) => {
            let arr = []
            // Or you can you filter function.
            prev.forEach((_task) => {
                if (_task.time != task.time) {
                    arr = [...arr, { ..._task }]
                }
            })
            return arr
        })
    }

    return (
        <Modal open={open} toggleModal={toggleModal}>

            <div className='mt-2.5'>
                Are you sure you want to delete the task: "{task.text.length > 8 ? task.text.slice(0, 8) + "..." : task.text}"
            </div>

            <div className='mt-3 flex justify-end gap-2'>
                <Button type='button' className="bg-[#777] rounded-full hover:bg-same" onClick={toggleModal}>
                    Close
                </Button>
                <Button type='submit' className="bg-[#e5050f] rounded-full hover:bg-same" onClick={deleteTask}>
                    Delete
                </Button>
            </div>

        </Modal>
    )
}
