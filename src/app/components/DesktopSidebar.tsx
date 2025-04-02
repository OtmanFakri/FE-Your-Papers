import CategoryList from "@/app/components/CategoryList";
import {Category} from "@/services/category";

interface DesktopSidebarProps {
    categories: Category[];
    onCategoryClick: (categoryId: number) => void;
    selectedCategoryId?: number;
}

function DesktopSidebar({categories, onCategoryClick, selectedCategoryId}: DesktopSidebarProps) {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-l border-gray-200 bg-white px-6 py-6">
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <CategoryList categories={categories} onCategoryClick={onCategoryClick}
                                          selectedCategoryId={selectedCategoryId}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default DesktopSidebar