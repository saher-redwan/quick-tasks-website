import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AddTasks() {
    return (
        <form className='flex gap-2 my-6 items-center'>
            <Input className='rounded-4xl custom-item py-5 cursor-default' placeholder='Add A New Task...'/>
            <button type='submit' className='custom-item circl text-[1.35rem]'>
                +
            </button>
        </form>
    )
}
