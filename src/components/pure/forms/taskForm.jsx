import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/taskclass';

const TaskForm = ({ add }) => {

    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        console.log(newTask)
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName'
                    type='text' required autoFocus
                    placeholder='Task Name'
                    className='form-control form-control-lg' />

                <input ref={descriptionRef} id='inputDescription'
                    type='text' required 
                    placeholder='Task description'
                    className='form-control form-control-lg' />

                <label htmlFor='selectLevel'
                className='sr-only'>
                Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL}
                id='selectLevel'>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgente
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>

            </div>
            <button type='submit' 
            className='btn btn-success btn-lg ms-2' >Add</button>
        </form>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
