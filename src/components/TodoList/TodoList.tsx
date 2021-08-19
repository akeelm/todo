import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import ITodo from '../../interfaces/ITodo';
import { add, deleteTodo, edit } from '../../redux/todoSlice';
import { StyledUl } from '../StyledComponents';
import TodoItem from '../TodoItem';

interface ITodoListProps {
    todoList: ITodo[];
    isCompletedList: boolean;
}

const TodoList: React.FC<ITodoListProps> = ({
    todoList,
    isCompletedList
}) => {
    const dispatch = useAppDispatch();

    const completeHandlerFn = (id: number, text: string, completed: boolean) => {
        dispatch(edit({id, text, completed}))
    };

    const deleteHandlerFn = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const editHandlerFn = (id: number, text: string) => {
        if (id === -1) {
            dispatch(add({id: -1, text, completed: false}));
        } else {
            dispatch(edit({ id, text, completed: false}))
        }
    };


    return (
        <>
            <h2>{isCompletedList ?  "Completed list" : "Todo list"}</h2>
            <StyledUl
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
            </StyledUl>
        </>
    );
};

export default TodoList;
