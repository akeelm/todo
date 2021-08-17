import { render } from '@testing-library/react'
import TodoItem from '.';
import { ITodoItem } from './TodoItem'

describe('TodoItem tests', () => {
    const mockTodoItem: ITodoItem = {
        id: 1,
        text: 'Need to write some tests',
        completed: false
    };

   it('should be able to render', () => {
       const { container } = render(
           <TodoItem
               id={mockTodoItem.id}
               text={mockTodoItem.text}
               completed={mockTodoItem.completed}
           />
       );

       expect(container).toMatchSnapshot();
   });

   it ('should have an editable input', () => {
       throw('not yet implemented');
   });

   it ('should be able to mark as completed', () => {
       throw('not yet implemented');
   });

   it('should be able to delete the todo', () => {
       throw('not yet implemented');
   });
});