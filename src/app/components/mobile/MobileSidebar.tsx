import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import CategoryList from "@/app/components/CategoryList";
import {Category} from "@/services/category";

interface MobileSidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    categories: Category[];
    onCategoryClick: (categoryId: number) => void;
    selectedCategoryId?: number;
}

function MobileSidebar({ sidebarOpen, setSidebarOpen, categories, onCategoryClick,selectedCategoryId }: MobileSidebarProps) {
    return (
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
            />
            <div className="fixed inset-0 flex">
                <DialogPanel
                    transition
                    className="relative ml-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:translate-x-full"
                >
                    <div
                        className="absolute top-0 right-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0"
                    >
                        <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                            <span className="sr-only">إغلاق الشريط الجانبي</span>
                            <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                        </button>
                    </div>
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                        <div className="flex h-16 shrink-0 items-center">
                            <h1>Wrak Dialk</h1>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <CategoryList categories={categories} onCategoryClick={onCategoryClick} selectedCategoryId={selectedCategoryId}/>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
export default MobileSidebar