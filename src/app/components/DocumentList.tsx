import {Document} from "@/services/document";
import classNames from "@/utils/className";

interface DocumentListProps {
    documents: Document[];
    onDocumentClick: (documentId: number) => void;
    selectedDocumentId?: number
}

function DocumentList({documents, onDocumentClick, selectedDocumentId}: DocumentListProps) {
    return (
        <ul role="list" className="mx-2 space-y-1">
            {documents.map((item) => (
                <li key={item.Document_ID}>
                    <button
                        onClick={() => onDocumentClick(item.Document_ID)}
                        className={classNames(
                            selectedDocumentId === item.Document_ID
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full text-right'
                        )}
                    >
                        {item.Title}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default DocumentList