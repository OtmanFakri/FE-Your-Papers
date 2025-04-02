import {Bars3Icon} from "@heroicons/react/24/outline";

interface MobileHeaderProps {
    setSidebarOpen: (open: boolean) => void;
}

function MobileHeader({ setSidebarOpen }: MobileHeaderProps) {
    return (
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                <span className="sr-only">فتح الشريط الجانبي</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
            <div className="flex-1 text-sm/6 font-semibold text-gray-900">لوحة التحكم</div>
        </div>
    );
}
export default MobileHeader