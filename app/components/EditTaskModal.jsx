import React, { useState } from 'react'
import Modal from './custom_ui/Modal'
import { Button } from '@/components/ui/button'

export default function EditTaskModal({ open, toggleModal, setTasks, task }) {

    const [inputText, setInputText] = useState(task.text)

    function editTask(e) {
        e.preventDefault()

        if (inputText.trim() != "") {
            setTasks((prev) => {
                return prev.map((_task) => {
                    if (_task.time == task.time) {
                        _task.text = inputText;
                        return _task;
                    }
                    return _task;
                })
            })

            toggleModal()
        }
    }

    return (
        <Modal open={open} toggleModal={toggleModal}>

            <div className='mt-2.5'>
                You Can Edit The Task:
            </div>
            <form onSubmit={editTask}>
                <input type="text" className='custom-item mt-2 py-2 px-3 w-full' style={{ border: "1px solid #999" }} value={inputText} onChange={(e) => setInputText(e.target.value)} />

                <div className='mt-6 flex justify-end gap-2'>
                    <Button type='button' className="bg-[#777] rounded-full hover:bg-same" onClick={() => {
                        toggleModal();
                        setInputText(task.text)
                    }}>
                        Close
                    </Button>
                    <Button type='submit' className="bg-[#463e6f] rounded-full hover:bg-same">
                        Edit
                    </Button>
                </div>
            </form>

        </Modal>
    )
}
