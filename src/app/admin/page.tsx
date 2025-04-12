'use client'

import React, {useState, useEffect} from 'react';
import {Document} from "@/services/document";
import Link from "next/link";
import {PlusCircle, FileText, Filter} from 'lucide-react';
import Dropdown from "@/app/components/dropdown";
import {Item} from "@/utils/Interfaces";

const categories: Item[] = [
    {id: 1, name: 'Category 1',},
    {id: 2, name: 'Category 2',},
    {id: 3, name: 'Category 3',},
];

const documents: Document[] = [
    {Document_ID: 1, Title: 'Document 1'},
    {Document_ID: 2, Title: 'Document 2'},
    {Document_ID: 3, Title: 'Document 3'},
    {Document_ID: 4, Title: 'Document 4'},
    {Document_ID: 5, Title: 'Document 5'},
];

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState<Item | null>(null);
    const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(documents);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Filter documents based on category and search term
        let filtered = documents;

        if (selectedCategory) {
            filtered = filtered.filter((doc) => doc.Document_ID === selectedCategory.id);
        }

        if (searchTerm) {
            filtered = filtered.filter((doc) =>
                doc.Title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredDocuments(filtered);
    }, [selectedCategory, searchTerm]);

    const handleCategoryChange = (item: Item) => {
        setSelectedCategory(item);
    };

    const handleReset = () => {
        setSelectedCategory(null);
        setSearchTerm('');
        setFilteredDocuments(documents);
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="flex items-center mb-4 sm:mb-0">
                    <FileText className="h-6 w-6 text-blue-600 mr-2"/>
                    <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
                </div>
                <Link
                    href="/Documents/new"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusCircle className="h-4 w-4 mr-2"/>
                    Create Document
                </Link>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-end">
                    <div className="w-full md:w-1/3">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                            Search
                        </label>
                        <div className="mt-2">

                            <input
                                type="text"
                                id="search"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Search documents..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <Dropdown
                        items={categories}
                        label={"Category"}
                        selectedItem={selectedCategory}
                        onChange={handleCategoryChange}
                    />

                    <button
                        onClick={handleReset}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        <Filter className="h-4 w-4 mr-2"/>
                        Reset Filters
                    </button>
                </div>
            </div>

            {/* Documents Table */}
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                {isLoading ? (
                    <div className="p-8 flex justify-center">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-4 py-1">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {filteredDocuments.length === 0 ? (
                            <div className="text-center py-12">
                                <FileText className="mx-auto h-12 w-12 text-gray-400"/>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No documents found</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    {searchTerm || selectedCategory
                                        ? "Try adjusting your search or filter criteria."
                                        : "Get started by creating a new document."}
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/Documents/new"
                                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <PlusCircle className="h-4 w-4 mr-2"/>
                                        Create Document
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Document ID
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Content Modified
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Amount
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredDocuments.map((document) => (
                                        <tr
                                            key={document.Document_ID}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #{document.Document_ID}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {document.Title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                12
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                $12.00
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                <div className="flex space-x-2">
                                                    <Link
                                                        href={`/Documents/${document.Document_ID}`}
                                                        className="text-blue-600 hover:text-blue-900 font-medium"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={`/Documents/${document.Document_ID}/edit`}
                                                        className="text-blue-600 hover:text-blue-900 font-medium"
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;