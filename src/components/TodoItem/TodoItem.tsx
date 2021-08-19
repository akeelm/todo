import React, { useState, useEffect, useRef, useCallback } from 'react';
import ITodo from '../../interfaces/ITodo';
import { StyledCheckBox, StyledInput, StyledTodoItem, StyledTodoText } from '../StyledComponents';

export interface ITodoItemProps extends ITodo {
    completeHandler: (id: number, text: string, completed: boolean) => void;
    deleteHandler: (id: number) => void;
    editHandler: (id: number, text: string, completed: boolean) => void;
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
    const [todoText, setTodoText] = useState(text);

    const isAddTodo = useCallback(() => id === -1, [id]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!isEditing && isAddTodo()) {
            // reset the text
            setTodoText('');
        } 
        
        if (isEditing) {
            // set focus when editing
            inputRef.current?.focus();
        }
    }, [isEditing, isAddTodo]);

    const todoItemCheckboxHandler = () => {
        completeHandler(id, todoText, !completed);
    }

    const deleteTodoHandler = () => {
        deleteHandler(id);
    }

    const editTodoHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            editHandler(id, todoText, completed);
            setIsEditing(false);

            if (isAddTodo()) {
                setTodoText('');
            }
        }
    }

    return (
        <StyledTodoItem isAddTodo={isAddTodo()} className="todo-item" data-testid="todo-item">
            {
                isAddTodo() ?
                    <span>+</span>
                    :
                    <StyledCheckBox
                        type="checkbox"
                        data-testid="todo-item-checkbox"
                        title="Complete"
                        tabIndex={0}
                        onChange={todoItemCheckboxHandler}
                        checked={completed}
                    ></StyledCheckBox>
            }
            {
                isEditing ?
                    <StyledInput
                        ref={inputRef}
                        type="text"
                        data-testid="todo-item-input"
                        title="Edit todo"
                        onChange={e => setTodoText(e.target.value)}
                        onKeyPress={editTodoHandler}
                        onBlur={() => setIsEditing(false)}
                        value={todoText}
                    ></StyledInput>
                    :
                    <StyledTodoText
                        data-testid="todo-item-text"
                        tabIndex={0}
                        onFocus={() => setIsEditing(true)}
                        completed={completed}
                    >
                        {isAddTodo() ? 'Add a todo' : text}
                    </StyledTodoText>
            }
            {
                !isAddTodo() &&
                <button
                    title="Delete todo"
                    data-testid="delete-todo-button"
                    onClick={deleteTodoHandler}
                >
                    Delete
                </button>
            }
        </StyledTodoItem>
    );
}

export default TodoItem;
