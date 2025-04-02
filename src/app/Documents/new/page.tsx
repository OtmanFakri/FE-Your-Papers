'use client'
import React, {useState} from 'react';

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [defaultContent, setDefaultContent] = useState('');
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <h2 className="text-2xl font-bold mb-4">Create New Document</h2>
            <form className={'w-full'}>
                <div className={'flex space-x-4 w-full'}>
                    <div className={'w-full'}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Category
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="defaultContent">
                                Default Content
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="defaultContent"
                                value={defaultContent}
                                onChange={(e) => setDefaultContent(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"bg-red-600 w-full"}>
                        sss
                    </div>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Create Document
                </button>
            </form>
        </div>
    );
};

export default Page;