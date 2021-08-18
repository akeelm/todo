import React, { useState } from 'react';
import ITodo from '../../interfaces/ITodo';

export interface ITodoItemProps extends ITodo {
    completeHandler: (id: number, state: boolean) => void;
    deleteHandler: (id: number) => void;
    editHandler: (id: number, text: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({
    id,
    text,
    completed,
    completeHandler,
    deleteHandler,
    editHandler
}) => {
    const [isEditing, setIsEditing] = useState(false);

    const todoItemCheckboxHandler = () => {
        completeHandler(id, !completed);
    }

    const deleteTodoHandler = () => {
        deleteHandler(id);
    }

    const editTodoHandler = (event: React.SyntheticEvent<HTMLInputElement>) => {
        editHandler(id, (event.target as HTMLInputElement).innerText)
    }

    return (
        <li className="todo-item" data-testid="todo-item">
            <input
                type="checkbox"
                data-testid="todo-item-checkbox"
                title="Complete"
                tabIndex={1}
                onChange={todoItemCheckboxHandler}
                checked={completed}
            ></input>
            {
                isEditing ?
                    <input
                        type="text"
                        data-testid="todo-item-input"
                        title="Edit todo"
                        onChange={editTodoHandler}
                    ></input>
                    :
                    <span
                        data-testid="todo-item-text"
                        tabIndex={1}
                        className={`todo-item__text ${completed ? 'todo-item__text--completed' : ''}`}
                        onFocus={() => setIsEditing(true)}
                    >
                        {text}
                    </span>
            }
            <button
                title="Delete todo"
                data-testid="delete-todo-button"
                onClick={deleteTodoHandler}
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
