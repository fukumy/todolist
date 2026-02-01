import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-center gap-2 py-6">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Simple ToDo
            </h1>
        </header>
    );
};
