import React from 'react';
import ITodo from '../../interfaces/ITodo';
import TodoItem from '../TodoItem';

interface ITodoListProps {
    todoList: ITodo[];
    isCompletedList: boolean;
}

const TodoList: React.FC<ITodoListProps> = ({
    todoList,
    isCompletedList
}) => {
    const completeHandlerFn = (id: number, completed: boolean) => {};
    const deleteHandlerFn = (id: number) => {};
    const editHandlerFn = (id: number, text: string) => {};
    return (
        <>
            <h2>{isCompletedList ? "Todo list" : "Completed list"}</h2>
            <ul
                className="todo-list"
                data-testid="todo-list"
            >
                {
                    todoList.map((x) => 
                        <TodoItem
                            key={`todo-item-${x.id}`}
                            {...x}
                            completeHandler={completeHandlerFn}
                            deleteHandler={deleteHandlerFn}
                            editHandler={editHandlerFn}
                        />
                    )
                }
                {
                    !isCompletedList && (
                        <>
                            <h3>Add a new Todo:</h3>
                            <TodoItem
                                id={-1}
                                text=""
                                completed={false}
                                completeHandler={completeHandlerFn}
                                deleteHandler={deleteHandlerFn}
                                editHandler={editHandlerFn}
                            />
                        </>
                    )
                }
            </ul>
        </>
    );
};

export default TodoList;
