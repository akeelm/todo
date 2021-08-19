import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import ITodo from '../interfaces/ITodo';

export interface ITodoState {
    todos: ITodo[];
};

const initialState: ITodoState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ITodo>) => {
            action.payload.id =
                state.todos.length ?
                    Math.max(...state.todos.map(x => x.id)) + 1
                    :
                    1;

            state.todos.push(action.payload);
        },
        edit: (state, action: PayloadAction<ITodo>) => {
            state.todos = state.todos.map(x => {
                if (x.id === action.payload.id) {
                    return ({
                        ...x,
                        text: action.payload.text,
                        completed: action.payload.completed
                    })
                }
                return x;
            });
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(x => x.id !== action.payload);
        }
    }
});

export const { add, edit, deleteTodo } = todoSlice.actions;

export const getTodos = (state: RootState) => state.todo;

export default todoSlice.reducer;