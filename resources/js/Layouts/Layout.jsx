import { Head } from "@inertiajs/inertia-react";
import AppNavigation from "@/Components/AppNavigation";

export default function Layout({ title = "Laravel 8 React", children }) {
    return (
        <>
            <Head title={title} />
            <AppNavigation />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4  sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
