"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"

export default function AddTasks({ setTasks }) {

    const [text, setText] = useState("")

    function submitTheTask(e) {
        e.preventDefault();
        if (text.trim() != "") {
            setTasks((prev) => [...prev, { text, time: new Date().getTime(), checked: false }])
            setText("")
        }
    }

    return (
        <form onSubmit={submitTheTask} className='flex gap-2 my-6 items-center'>
            <Input value={text} onChange={(e) => setText(e.target.value)} className='rounded-4xl custom-item py-5 cursor-pointer' placeholder='Add A New Task...' />
            <button type='submit' className='custom-item circl text-[1.35rem]'>
                +
            </button>
        </form>
    )
}
