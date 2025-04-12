'use client'
import React from 'react';
import {MenuBar} from "@/app/components/Tiptap/Tiptap";
import {EditorProvider} from "@tiptap/react";
import {content, extensions} from "@/utils/utils";

const Page = () => {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [defaultContent, setDefaultContent] = useState('');
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            <div className={'flex justify-between items-center '}>
                <h2 className="text-2xl font-bold mb-4">Create New Document</h2>
                <div className={'space-x-4'}>
                    <button
                        type="button"
                        className="rounded-sm bg-indigo-600 px-3 py-2  text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save chnages
                    </button>
                    <button
                        type="button"
                        className="rounded-sm bg-white px-3 py-2  text-xs font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                    >
                        Publish
                    </button>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div
                    className="prose max-w-none prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-h4:text-sm prose-code:bg-purple-100 prose-code:rounded prose-code:p-1 prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded prose-pre:p-4 prose-pre:font-mono prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-hr:border-t prose-hr:border-gray-200 prose-hr:my-8"
                >
                    <EditorProvider
                        slotBefore={<MenuBar/>}
                        extensions={extensions}
                        content={content}
                        editorProps={{
                            attributes: {
                                dir: 'rtl',
                                style: 'white-space: pre-wrap;'
                            }
                        }}
                        onUpdate={({ editor }) => {
                            console.log(editor.getHTML()) // Check if dir and style are preserved
                        }}
                    >
                    </EditorProvider>
                </div>
            </div>
            {/*<form className={'w-full'}>*/}
            {/*    <div className={'flex space-x-4 w-full'}>*/}
            {/*        <div className={'w-full'}>*/}
            {/*            <div className="mb-4">*/}
            {/*                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">*/}
            {/*                    Title*/}
            {/*                </label>*/}
            {/*                <input*/}
            {/*                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
            {/*                    id="title"*/}
            {/*                    type="text"*/}
            {/*                    value={title}*/}
            {/*                    onChange={(e) => setTitle(e.target.value)}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="mb-4">*/}
            {/*                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">*/}
            {/*                    Category*/}
            {/*                </label>*/}
            {/*                <input*/}
            {/*                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
            {/*                    id="title"*/}
            {/*                    type="text"*/}
            {/*                    value={title}*/}
            {/*                    onChange={(e) => setTitle(e.target.value)}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="mb-4">*/}
            {/*                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">*/}
            {/*                    Description*/}
            {/*                </label>*/}
            {/*                <textarea*/}
            {/*                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
            {/*                    id="description"*/}
            {/*                    value={description}*/}
            {/*                    onChange={(e) => setDescription(e.target.value)}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="mb-4">*/}
            {/*                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="defaultContent">*/}
            {/*                    Default Content*/}
            {/*                </label>*/}
            {/*                <textarea*/}
            {/*                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
            {/*                    id="defaultContent"*/}
            {/*                    value={defaultContent}*/}
            {/*                    onChange={(e) => setDefaultContent(e.target.value)}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={"w-full"}>*/}
            {/*            sss*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button*/}
            {/*        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"*/}
            {/*        type="submit"*/}
            {/*    >*/}
            {/*        Create Document*/}
            {/*    </button>*/}
            {/*</form>*/}
        </div>
    );
};

export default Page;