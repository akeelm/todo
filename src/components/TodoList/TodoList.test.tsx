import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import TodoList from '.';
import { store } from '../../app/store';
import ITodo from '../../interfaces/ITodo';

describe('TodoList tests', () => {
    const mockTodoList: ITodo[] = [
        { id: 1, text: 'Todo 1', completed: false },
        { id: 2, text: 'Todo 2', completed: false },
        { id: 3, text: 'Todo 3', completed: false },
    ];

    it('should be able to render', () => {
       const { container } = render(
           <Provider store={store}>
               <TodoList
                   todoList={mockTodoList}
                   isCompletedList={false}
               />
           </Provider>
       );

       expect(container).toMatchSnapshot();
    });
});