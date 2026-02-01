import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import type { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="group flex items-center gap-3 p-3 bg-white/50 hover:bg-white rounded-lg border border-gray-100 hover:border-indigo-100 shadow-sm transition-all duration-200">
            <button
                onClick={() => onToggle(todo.id)}
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${todo.completed
                    ? 'bg-indigo-500 border-indigo-500 text-white'
                    : 'border-gray-300 hover:border-indigo-400 text-transparent'
                    }`}
            >
                <Check className="w-4 h-4" />
            </button>

            <span
                className={`flex-1 text-sm font-medium transition-all ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                    }`}
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all"
                aria-label="Delete task"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
};
