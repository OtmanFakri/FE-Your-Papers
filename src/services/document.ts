import axios from "axios";
import {API_BASE_URL} from "@/app/comfig/config";

export interface Document {
    Document_ID: number;
    Title: string;
}
export interface DocumentContent {
    Document_ID: number;
    Default_Content: string;
}
export interface ModifiedDocument {
    user_id: number;
    document_id: number;
    modified_content: string;
    payment_status: boolean;
}

export const getDocumentsByCategory = async (categoryId: number): Promise<Document[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/${categoryId}/documents/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

export const getDocumentContent = async (documentId: number): Promise<DocumentContent> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/documents/${documentId}/content/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching document content:', error);
        throw error;
    }
};
export const createModifiedDocument = async (modifiedDoc: ModifiedDocument): Promise<string> => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/documents/modified-documents/`,
            modifiedDoc,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating modified document:', error);
        throw error;
    }
};