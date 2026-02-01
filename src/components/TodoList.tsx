import React from 'react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400 space-y-2">
                <p className="text-sm">No tasks yet.</p>
                <p className="text-xs">Add one to get started!</p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
