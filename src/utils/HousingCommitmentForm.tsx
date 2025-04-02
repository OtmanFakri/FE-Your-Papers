import React, { useState } from 'react';
import { createModifiedDocument } from '@/services/document';
import ContentRenderer from "@/app/components/main/ContentRenderer";
import FormActions from "@/app/components/main/FormActions";

interface HousingCommitmentFormProps {
    selectedContent: string | null;
    documentId?: number;
    userId?: number;
}

function HousingCommitmentForm({ selectedContent, documentId = 1, userId = 1 }: HousingCommitmentFormProps) {
    const [inputValues, setInputValues] = useState<Record<string, string>>({});

    const handleInputChange = (inputId: string, value: string) => {
        if (value) {
            setInputValues(prev => ({ ...prev, [inputId]: value }));
        } else {
            setInputValues(prev => {
                const newState = { ...prev };
                delete newState[inputId];
                return newState;
            });
        }
    };

    const getModifiedContent = () => {
        if (!selectedContent) return '';
        const parts = selectedContent.split(/\[placeholder\]/g);
        let inputCounter = 0;

        return parts.map((part, index) => {
            if (index === parts.length - 1) return part;
            inputCounter++;
            const inputId = `input-${inputCounter}`;
            return part + (inputValues[inputId] || '[placeholder]');
        }).join('');
    };

    const handleSubmit = async () => {
        try {
            const modifiedContent = getModifiedContent();
            const modifiedDoc = {
                user_id: userId,
                document_id: documentId,
                modified_content: modifiedContent,
                payment_status: false,
            };
            const response = await createModifiedDocument(modifiedDoc);
            console.log('Document created successfully:', response);
        } catch (error) {
            console.error('Failed to create modified document:', error);
        }
    };

    return (
        <main className="lg:pr-72">
            <div className="xl:pr-96 flex flex-col justify-between items-start h-screen">
                <div className="px-4 sm:px-6 lg:px-8 overflow-y-auto h-screen">
                    {selectedContent ? (
                        <ContentRenderer
                            content={selectedContent}
                            inputValues={inputValues}
                            onInputChange={handleInputChange}
                        />
                    ) : (
                        <p className="text-gray-500 text-center py-10">
                            Main 1 - Select a document to view its content
                        </p>
                    )}
                </div>
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]  h-[50px] w-full m-4 flex items-center justify-center">
                    <FormActions onSubmit={handleSubmit} />
                </div>
            </div>
        </main>
    );
}

export default HousingCommitmentForm;