import {atom} from 'jotai';
export interface SizeOption {
    value: string;
    fontSize: string;
}
export const eselectedSizeAtom = atom<SizeOption>({value: "M", fontSize: "text-base"}); // Default size is M
