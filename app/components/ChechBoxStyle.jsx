import React, { useEffect, useState } from 'react'

export default function ChechBoxStyle({ value, checked, setTasks, task }) {

    const [randomId, setRandomId] = useState();

    useEffect(() => {
        setRandomId(String(Math.random()).slice(2))
    }, [])

    const [isChecked, setIsChecked] = useState(checked);

    function onChangeAction(e) {
        setIsChecked(e.target.checked)

        setTasks((prev) => {
            return prev.map(_task => {
                if (_task.time == task.time) {
                    _task.checked = !_task.checked
                    return _task
                }
                return _task
            })
        })
    }

    return (
        <div className="checkbox-wrapper-46 w-full">
            <input className="inp-cbx" id={`cbx-46-${randomId}`} type="checkbox"
                checked={isChecked}
                onChange={onChangeAction} />
            <label className="cbx flex items-center" htmlFor={`cbx-46-${randomId}`}>
                <span className='aspect-square'>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span className='task-text'>{value}</span>
            </label>
        </div>
    )
}
