import { PageProps } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import type { CV } from '@/types/cv'; // Adjust the import path as necessary
import { route } from '../../../../vendor/tightenco/ziggy/src/js/index';

interface PreviewCVPageProps extends PageProps {
    cv: CV;
}

export default function PreviewCVPage({ cv }: PreviewCVPageProps) {
    return (
        <AuthenticatedLayout>
            <Link
                href={route('dashboard')}
                className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>

            <h1 className="text-2xl font-bold mb-4">Preview CV: {cv.name}</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p><strong>Language:</strong> {cv.language}</p>
                <p><strong>Last Updated:</strong> {cv.last_updated}</p>
                <p><strong>Status:</strong> {cv.status}</p>
            </div>
        </AuthenticatedLayout>

    );
}