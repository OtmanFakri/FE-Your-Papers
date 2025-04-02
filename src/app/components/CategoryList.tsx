import {Category} from "@/services/category";
import classNames from "@/utils/className";

interface CategoryListProps {
    categories: Category[];
    onCategoryClick: (categoryId: number) => void;
    selectedCategoryId?: number;
}

function CategoryList({ categories, onCategoryClick, selectedCategoryId }: CategoryListProps) {
    return (
        <ul role="list" className="mx-2 space-y-1">
            {categories.map((item) => (
                <li key={item.Category_ID}>
                    <button
                        onClick={() => onCategoryClick(item.Category_ID)}
                        className={classNames(
                            selectedCategoryId === item.Category_ID
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full text-right'
                        )}
                    >
                        {item.Category_Name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default CategoryList