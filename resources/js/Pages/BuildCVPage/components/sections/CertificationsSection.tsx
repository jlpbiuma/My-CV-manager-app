import type { Certification } from "@/types/certification"

export default function CertificationsSection({ certifications = [] }: { certifications?: Certification[] }) {
    if (!certifications || certifications.length === 0) {
        return <div className="text-center py-4 text-gray-500">No certifications data available</div>
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-1">Certifications</h2>

            {certifications.map((cert) => (
                <div key={cert.id} className="mb-3 pb-3 border-b last:border-0">
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm">{cert.issuing_organization}</p>
                    <div className="flex justify-between items-start mt-1">
                        <span className="text-sm text-gray-500">Issued: {formatDate(cert.issue_date)}</span>
                        {cert.expiration_date && (
                            <span className="text-sm text-gray-500">Expires: {formatDate(cert.expiration_date)}</span>
                        )}
                    </div>
                    {cert.credential_id && (
                        <p className="text-sm mt-1">
                            <span className="font-medium">Credential ID:</span> {cert.credential_id}
                        </p>
                    )}
                    {cert.description && <p className="text-sm mt-1">{cert.description}</p>}
                </div>
            ))}
        </div>
    )
}

function formatDate(dateString: string) {
    if (!dateString) return ""

    try {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        })
    } catch (e) {
        return dateString
    }
}

