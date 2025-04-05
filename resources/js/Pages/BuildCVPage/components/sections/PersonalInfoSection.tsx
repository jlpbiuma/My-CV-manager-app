export default function PersonalInfoSection({ personal = {} }) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                {personal.avatar ? (
                    <img
                        src={personal.avatar || "/placeholder.svg"}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">Photo</div>
                )}
                <div>
                    <h1 className="text-2xl font-bold">{personal.name || "Your Name"}</h1>
                    <p className="text-gray-600">{personal.title || "Professional Title"}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                    <p className="font-medium">Email:</p>
                    <p>{personal.email || "email@example.com"}</p>
                </div>
                <div>
                    <p className="font-medium">Phone:</p>
                    <p>{personal.phone || "+1 234 567 890"}</p>
                </div>
                <div>
                    <p className="font-medium">Location:</p>
                    <p>{personal.location || "City, Country"}</p>
                </div>
                <div>
                    <p className="font-medium">Website:</p>
                    <p>{personal.website || "yourwebsite.com"}</p>
                </div>
            </div>

            {personal.summary && (
                <div>
                    <p className="font-medium">Summary:</p>
                    <p className="text-sm">{personal.summary}</p>
                </div>
            )}
        </div>
    )
}

