'use client'

import React, {useState} from 'react';
import {Category} from "@/services/category";
import {Document} from "@/services/document";
import Link from "next/link";

const categories: Category[] = [
    {Category_ID: 1, Category_Name: 'Category 1', Description: 'Description 1'},
    {Category_ID: 2, Category_Name: 'Category 2', Description: 'Description 2'},
    {Category_ID: 3, Category_Name: 'Category 3', Description: 'Description 3'},
];

const documents: Document[] = [
    {Document_ID: 1, Title: 'Document 1'},
    {Document_ID: 2, Title: 'Document 2'},
    {Document_ID: 3, Title: 'Document 3'},
    {Document_ID: 4, Title: 'Document 4'},
    {Document_ID: 5, Title: 'Document 5'},
];

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(documents);

    const handleCategoryChange = (category: Category) => {
        setSelectedCategory(category);
        const filteredDocs = documents.filter((doc) => doc.Document_ID === category.Category_ID);
        setFilteredDocuments(filteredDocs);
    };

    return (
        <div className="max-w-7xl mx-auto py-6 px-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Documents</h2>
            <div className={'flex space-x-2 items-center'}>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={selectedCategory?.Category_ID || ''}
                    onChange={(e) => handleCategoryChange(categories.find((cat) => cat.Category_ID === parseInt(e.target.value))!)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.Category_ID} value={category.Category_ID}>
                            {category.Category_Name}
                        </option>
                    ))}
                </select>
                <Link
                    className={'border border-gray-50 shadow-sm '}
                    href={'/Documents/new'}>
                    Create Document
                </Link>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Document ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Title
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Total Content Modify
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Total Amount
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredDocuments.map((document) => (
                    <tr key={document.Document_ID} className="bg-white border-b border-gray-200">
                        <td className="py-4 px-6">{document.Document_ID}</td>
                        <td className="py-4 px-6">{document.Title}</td>
                        <td className="py-4 px-6">12</td>
                        <td className="py-4 px-6">12$</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;