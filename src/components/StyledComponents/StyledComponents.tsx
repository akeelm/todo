import styled from 'styled-components';

export const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 2rem;
`;

interface IStyledTodoTextProps {
    completed: boolean;
}

export const StyledTodoText = styled.span<IStyledTodoTextProps>`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    margin: 0 2.5rem;
`;

interface IStyledTodoItem {
    isAddTodo: boolean;
}

export const StyledTodoItem = styled.li<IStyledTodoItem>`
    height: 2rem;
    display: flex;
    justify-content: ${props => props.isAddTodo ? 'center' : 'space-between'};
    margin: 2.5rem 0;
    cursor: pointer;
    color: ${props => props.isAddTodo ? 'green' : 'black'};
    font-weight: ${props => props.isAddTodo ? 'bold' : 'normal'};
`;

export const StyledCheckBox = styled.input`
    align-self: center;
    transform: scale(2);
`;

export const StyledInput = styled.input`
    margin: 0 1rem;
`;
