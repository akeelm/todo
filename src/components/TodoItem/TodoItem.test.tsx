import { render, getByTestId, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '.';
import { ITodoItemProps } from './TodoItem'

describe('TodoItem tests', () => {
    const mockCompleteHandler = (id: number, text: string, completed: boolean) => jest.fn();
    const mockDeleteHandler = (id: number) => jest.fn();
    const mockEditFn = jest.fn()
    const mockEditHandler = (id: number, string: string, completed: boolean) => mockEditFn();
    const mockTodoItem: ITodoItemProps = {
        id: 1,
        text: 'Need to write some tests',
        completed: false,
        completeHandler: mockCompleteHandler,
        deleteHandler: mockDeleteHandler,
        editHandler: mockEditHandler
    };

   it('should be able to render', () => {
       const { container } = render(
           <TodoItem {...mockTodoItem} />
       );

       expect(container).toMatchSnapshot();
   });

   it ('should have an editable input', async () => {
       const { container } = render(<TodoItem {...mockTodoItem} />);
       const text: Element = getByTestId(container, 'todo-item-text');
       await userEvent.click(text);

       const input: Element = getByTestId(container, 'todo-item-input');
       await waitFor(() => expect(input).toBeTruthy());

       await userEvent.type(input, 'test input{enter}');
       expect(mockEditFn).toHaveBeenCalled();
   });

   it ('should be able to mark as completed', async() => {
       const { container } = render(
           <TodoItem {...mockTodoItem} completed={true} />
       );

       const text: Element = getByTestId(container, 'todo-item-text');
       expect(text).toHaveClass('todo-item__text--completed');
   });

   it('should be able to delete the todo', () => {
       const { container } = render(
           <TodoItem {...mockTodoItem} />
       );

       const deleteButton: Element = getByTestId(container, 'delete-todo-button');
       userEvent.click(deleteButton);
       waitFor(() => expect(mockDeleteHandler).toHaveBeenCalled());
   });

   it('shouldnt have delete or complete checkbox if new todo', () => {
       const { queryByTestId } = render(
           <TodoItem {...mockTodoItem} id={-1} />
       );

       expect(queryByTestId ('delete-todo-button')).toBeNull();
       expect(queryByTestId ('todo-item-checkbox')).toBeNull();
   })
});