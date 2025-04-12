'use client'

import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {ChevronUpDownIcon} from '@heroicons/react/16/solid'
import {CheckIcon} from '@heroicons/react/20/solid'
import {Item} from "@/utils/Interfaces";



interface DropdownProps {
    items: Item[];
    selectedItem?: Item | null;
    onChange: (item: Item) => void;
    label?: string;
}

export default function Dropdown({ items, selectedItem, onChange, label = "Category" }: DropdownProps) {
    return (
        <div className="w-full md:w-1/3">
            <Listbox value={selectedItem || null} onChange={onChange}>
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </Label>
                <div className="relative mt-2">
                    <ListboxButton
                        className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-1.5 pl-3 pr-10 text-left text-gray-900"
                    >
                        <span className="block truncate">
                            {selectedItem?.name || "All Categories"}
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none"
                    >
                        <ListboxOption
                            key="all"
                            value={null}
                            className="relative cursor-default py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-blue-500 hover:text-white"
                        >
                            <span className="block truncate">All Categories</span>
                        </ListboxOption>
                        {items.map((item) => (
                            <ListboxOption
                                key={item.id}
                                value={item}
                                className="relative cursor-default py-2 pl-3 pr-9 text-gray-900 select-none hover:bg-blue-500 hover:text-white"
                            >
                                <span className="block truncate">
                                    {item.name}
                                </span>
                                {selectedItem?.id === item.id && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                    </span>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
}