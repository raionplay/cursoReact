import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/taskclass';

import "../../styles/task.scss"
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task,complete,remove }) => {

    useEffect(() => {
        console.log("Tarea cleada")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)

            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)

            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    
    function taskIconCompleted() {
        if (task.completed) {
            return (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{ color: "green" }} />)
        }
        return (<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{ color: "grey" }} />)
    }


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i className='bi-trash task-action' 
                onClick={()=>remove(task)}
                style={{ color: "tomato" }} />
            </td>
        </tr>

    )
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
