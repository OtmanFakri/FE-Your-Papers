import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {Color} from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import StarterKit from "@tiptap/starter-kit";
import {Paragraph} from "@tiptap/extension-paragraph";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const CustomParagraph = Paragraph.extend({
    addAttributes() {
        return {
            style: {
                default: 'white-space: pre-wrap',
                parseHTML: element => element.getAttribute('style') || 'white-space: pre-wrap',
                renderHTML: attributes => ({
                    style: attributes.style,
                }),
            },
            class: {
                default: 'w-full',
                parseHTML: element => element.getAttribute('class') || 'w-full',
                renderHTML: attributes => ({
                    class: attributes.class,
                }),
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'p',
                preserveWhitespace: 'full',
                getAttrs: (node) => {
                    if (typeof node === 'string') return null;

                    const style = node.getAttribute('style');
                    const hasPreWrap = style && style.includes('white-space: pre-wrap');

                    return {
                        style: hasPreWrap ? style : 'white-space: pre-wrap',
                        class: node.getAttribute('class') || 'w-full'
                    };
                },
            },
        ];
    },

    renderHTML({HTMLAttributes}) {
        return ['p', {
            ...HTMLAttributes,
            style: HTMLAttributes.style || 'white-space: pre-wrap',
            class: HTMLAttributes.class || 'w-full'
        }, 0];
    },
});

export const tiptapOptions = {
    preserveWhitespace: true, // Enable global whitespace preservation
}
export const extensions = [
    Color.configure({types: [TextStyle.name, ListItem.name]}),
    // TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        // document: false,
        // paragraph: false,
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
    // CustomParagraph
]

export const content = `
<pre>
   التزام وتصريح بالشرف





أنا الموقع أسفله:



\t السيد: [placeholder]، المزداد بتاريخ:[placeholder]، مغربي، كامل الاهلية والحامل لبطاقة التعريف الوطنية رقم: [placeholder] والساكن   [placeholder]



               بموجب هذه الوثيقة و بكافة الضمانات الفعلية والقانونية   أشهد على نفسي وأصرح وأنا بكامل قواي العقلية والجسدية بأنني لا أتوفر على أية أملاك  سواء عقارية أو غيرها، ولا أتوفر على حساب بنكي بأية مؤسسة بنكية، كما أنني لا أتوفر على عمل رسمي قار، حيث أنني أعمل بشكل موسمي وأتقاضى مبلغ يتراوح ما بين [placeholder] درهم [placeholder] درهم في اليوم الواحد.

   التزام تام وصحيح متحملا بذلك كافة السمؤوليات القانونية الناتجة عنه.



   حرر  [placeholder]



   إمضاء: [placeholder]

</pre>
`