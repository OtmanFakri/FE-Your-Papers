'use client'
import {Category, getCategories} from "@/services/category";
import {useState, useEffect} from "react";
import {getDocumentsByCategory} from "@/services/document";
import {getDocumentContent, Document} from "@/services/document";
import HousingCommitmentForm from "@/utils/HousingCommitmentForm";
import MobileSidebar from "@/app/components/mobile/MobileSidebar";
import DesktopSidebar from "@/app/components/DesktopSidebar";
import MobileHeader from "@/app/components/mobile/MobileHeader";
import DocumentList from "@/app/components/DocumentList";

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [documents, setDocuments] = useState<Document[]>([]);
    const [selectedContent, setSelectedContent] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);
    const [selectedDocumentId, setSelectedDocumentId] = useState<number | undefined>(undefined);


    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getCategories({page});
                setCategories(data);
            } catch (err) {
                setError('Failed to load categories');
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);


    const handleDocumentClick = async (documentId: number) => {
        setSelectedDocumentId(documentId);
        try {
            setLoading(true);
            const content = await getDocumentContent(documentId);
            setSelectedContent(content.Default_Content);
        } catch (err) {
            console.log('Error fetching document content:', err);
            setError('Failed to load document content');
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = async (categoryId: number) => {
        setSelectedCategoryId(categoryId);
        setSelectedDocumentId(undefined);
        try {
            setLoading(true);
            const docs = await getDocumentsByCategory(categoryId);
            setDocuments(docs);
            setSelectedContent(null);
        } catch (err) {
            setDocuments([]);
            setError('Failed to load documents');
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div dir="rtl">
            <MobileSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                categories={categories}
                onCategoryClick={handleCategoryClick}
                selectedCategoryId={selectedCategoryId}
            />
            <DesktopSidebar categories={categories} onCategoryClick={handleCategoryClick} selectedCategoryId={selectedCategoryId}/>
            <MobileHeader setSidebarOpen={setSidebarOpen}/>
            <HousingCommitmentForm selectedContent={selectedContent}/>
            <aside
                className="fixed inset-y-0 right-72 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <DocumentList documents={documents} onDocumentClick={handleDocumentClick} selectedDocumentId={selectedDocumentId}/>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}