import axios from 'axios';
import {API_BASE_URL} from "@/app/comfig/config";


export interface Category {
    Category_ID: number;
    Category_Name: string;
    Description: string | null;
}

interface PaginationParams {
    page: number;
}

export const getCategories = async ({page}: PaginationParams): Promise<Category[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/category/`, {
            params: {
                page,
                // per_page: 10,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};