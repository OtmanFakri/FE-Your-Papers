import React from 'react';
import PlaceholderInput from './PlaceholderInput';
import {useAtom} from "jotai";
import {eselectedSizeAtom} from "@/app/atom/atom";

interface ContentRendererProps {
    content: string;
    inputValues: Record<string, string>;
    onInputChange: (inputId: string, value: string) => void;
}

function ContentRenderer({content, inputValues, onInputChange}: ContentRendererProps) {
    const [selectedSize,] = useAtom(eselectedSizeAtom);

    const renderContent = () => {
        const parts = content.split(/\[placeholder\]/g);
        let inputCounter = 0;

        return parts.map((part, index) => {
            if (index === parts.length - 1) return <span key={index}>{part}</span>;

            inputCounter++;
            const inputId = `input-${inputCounter}`;
            const value = inputValues[inputId] || '';

            return (
                <React.Fragment key={index}>
                    <span>{part}</span>
                    <PlaceholderInput
                        inputId={inputId}
                        value={value}
                        onValueChange={onInputChange}
                    />
                </React.Fragment>
            );
        });
    };

    return <div
        className={`A4-page font-custom-font3 m-8  whitespace-pre-line text-justify ${selectedSize.fontSize} tracking-widest leading-loose`}
        dir="rtl">
        {/*{accommodationCommitmentHtml}  FOR TEST*/}
        {renderContent()}
    </div>;
}

export default ContentRenderer;