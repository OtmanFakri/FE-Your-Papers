import React, {useState} from 'react';

interface PlaceholderInputProps {
    inputId: string;
    value: string;
    onValueChange: (inputId: string, value: string) => void;
}

function PlaceholderInput({inputId, value, onValueChange}: PlaceholderInputProps) {
    const [editing, setEditing] = useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const trimmedValue = e.target.value.trim();
        onValueChange(inputId, trimmedValue);
        setEditing(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const trimmedValue = (e.target as HTMLInputElement).value.trim();
            onValueChange(inputId, trimmedValue);
            setEditing(false);
        }
    };

    return (
        <span className="relative inline-block">
            {!value && !editing && (
                <span
                    className="text-blue-600 cursor-pointer underline hover:text-blue-800"
                    onClick={() => setEditing(true)}
                >
    [اضغط للإدخال]
    </span>
            )}
            {value && !editing && (
                <span
                    className="cursor-pointer hover:underline"
                    onClick={() => setEditing(true)}
                >
        {value}
        </span>
            )}
            {editing && (
                <input
                    type="text"
                    className="px-1 mx-1 bg-transparent focus:outline-none"
                    value={value}
                    onChange={(e) => onValueChange(inputId, e.target.value)}
                    onBlur={handleBlur}
                    onKeyPress={handleKeyPress}
                    autoFocus
                />
            )}
    </span>
    );
}

export default PlaceholderInput;