import React, {useState} from 'react';
import {ArrowDownIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {useAtom} from 'jotai';
import {eselectedSizeAtom, SizeOption} from "@/app/atom/atom";



interface FormActionsProps {
    onSubmit: () => void;
}

function FormActions({onSubmit}: FormActionsProps) {
    const [isContentDropdownOpen, setIsContentDropdownOpen] = useState(false);
    const [isTextSizeDropdownOpen, setIsTextSizeDropdownOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useAtom(eselectedSizeAtom);

    const contentOptions = ["Default", "Option 1", "Option 2", "Option 3"];

    const sizeOptions: SizeOption[] = [
        {value: "XS", fontSize: "text-xs"},
        {value: "S", fontSize: "text-sm"},
        {value: "M", fontSize: "text-base"},
        {value: "L", fontSize: "text-lg"},
        {value: "XL", fontSize: "text-xl"},
    ];
    const handleSizeSelect = (option: SizeOption) => {
        setSelectedSize(option);
        setIsTextSizeDropdownOpen(false);
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between space-x-4">
            <div className="flex space-x-4">
                {/* Content Dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        className="flex items-center justify-between w-40 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setIsContentDropdownOpen(!isContentDropdownOpen)}
                    >
                        ss
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true"/>
                    </button>

                    {isContentDropdownOpen && (
                        <div
                            className="absolute z-10 mb-1 bottom-full w-40 bg-white shadow-lg max-h-60 rounded-md ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                            <div className="py-1">
                                {contentOptions.map((option) => (
                                    <div
                                        key={option}
                                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        // onClick={() => handleContentSelect(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Size Dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        className="flex items-center justify-between w-40 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setIsTextSizeDropdownOpen(!isTextSizeDropdownOpen)}
                    >
                        {selectedSize.value}
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true"/>
                    </button>

                    {isTextSizeDropdownOpen && (
                        <div
                            className="absolute z-10 bottom-full mb-1 w-40 bg-white shadow-lg max-h-60 rounded-md ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                            <div className="py-1">
                                {sizeOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`cursor-pointer px-4 py-2 text-sm ${
                                            selectedSize.value === option.value
                                                ? "bg-indigo-100 text-indigo-900 font-medium"
                                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                        onClick={() => handleSizeSelect(option)}
                                    >
                                        {option.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                className={"flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 w-12"}>
                <ArrowDownIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700"
                    // onClick={onSubmit}
                />
            </div>
        </div>
    );
}

export default FormActions;