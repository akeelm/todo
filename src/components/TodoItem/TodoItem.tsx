import React from 'react';

export interface ITodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({
    id,
    text,
    completed
}) => {
    return (
        <div className="todo-item" data-testid="todo-item">

        </div>
    );
}

export default TodoItem;
