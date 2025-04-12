'use client'

// const Tiptap = () => {
//     const editor = useEditor({
//         extensions: [StarterKit],
//         content: '<p>Hello World! 🌎️</p>',
//     })
//
//     return <EditorContent editor={editor} />
// }
//
// export default Tiptap
import './styles.css'
import { useCurrentEditor } from '@tiptap/react'
import React from 'react'

export const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className="flex flex-wrap gap-2 p-2 border-b">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`px-3 py-1 rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} disabled:opacity-50`}
            >
                Bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`px-3 py-1 rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} disabled:opacity-50`}
            >
                Italic
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`px-3 py-1 rounded ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} disabled:opacity-50`}
            >
                Strike
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`px-3 py-1 rounded ${editor.isActive('code') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} disabled:opacity-50`}
            >
                Code
            </button>
            <button
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
                Clear marks
            </button>
            <button
                onClick={() => editor.chain().focus().clearNodes().run()}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
                Clear nodes
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`px-3 py-1 rounded ${editor.isActive('paragraph') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                Paragraph
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                H3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 4 }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                H4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 5 }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                H5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={`px-3 py-1 rounded ${editor.isActive('heading', { level: 6 }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                H6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`px-3 py-1 rounded ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                Bullet list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`px-3 py-1 rounded ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                Ordered list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`px-3 py-1 rounded ${editor.isActive('codeBlock') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                Code block
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`px-3 py-1 rounded ${editor.isActive('blockquote') ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                Blockquote
            </button>
            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
                Horizontal rule
            </button>
            <button
                onClick={() => editor.chain().focus().setHardBreak().run()}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
                Hard break
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
                Undo
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
                Redo
            </button>
            <button
                onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                className={`px-3 py-1 rounded ${editor.isActive('textStyle', { color: '#958DF1' }) ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                Purple
            </button>
        </div>
    )
}


// export default () => {
//     return (
//         <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
//     )
// }