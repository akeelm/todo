import ITodo from '../interfaces/ITodo';
import todoReducer, {
    ITodoState,
    add,
    edit,
    deleteTodo
} from './todoSlice';

describe('todo reducer', () => {
    it('should be able to add an intiial todo and assign an id', () => {
        const initialState: ITodoState = {
            todos: []
        };

        const mockTodo: ITodo = {
            id: -1,
            text: 'Hello',
            completed: false
        }
        expect(todoReducer(initialState, add(mockTodo))).toEqual({todos: [{
            id: 1,
            text: 'Hello',
            completed: false
        }]});
    });

    it('should be able to edit an existing todo', () => {
        const initialState: ITodoState = {
            todos: [
                {
                    id: 1,
                    text: 'Hello',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Bye',
                    completed: false
                }
            ]
        };

        const editedTodo: ITodo = {
                    id: 2,
                    text: 'Ciao',
                    completed: false
                };

        expect(todoReducer(initialState, edit(editedTodo)).todos.find(x => x.id === 2)?.text).toBe('Ciao');
    });

    it ('should be able to delete a todo', () => {
        const initialState: ITodoState = {
            todos: [
                {
                    id: 1,
                    text: 'Hello',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Bye',
                    completed: false
                }
            ]
        };

        expect(todoReducer(initialState, deleteTodo(1)).todos.length).toEqual(1);
    })
})