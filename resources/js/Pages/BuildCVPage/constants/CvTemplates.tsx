export const CV_TEMPLATES = {
    modern: {
        name: "Modern",
        layout: [
            { type: "experiencias", position: { x: 20, y: 20 } },
            { type: "formaciones", position: { x: 20, y: 300 } },
            { type: "estudios", position: { x: 20, y: 450 } },
            { type: "proyectos", position: { x: 450, y: 20 } },
            { type: "certificaciones", position: { x: 450, y: 300 } },
            { type: "idiomas", position: { x: 450, y: 450 } },
            { type: "webs", position: { x: 450, y: 550 } },
        ],
        component: ({ data, sections }) => (
            <div className="bg-white p-8 font-sans">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">{data.name || "Your Name"}</h1>
                    <h2 className="text-xl text-blue-600">{data.title || "Your Title"}</h2>
                    <div className="mt-2 text-gray-600">
                        <p>{data.email} • {data.phone} • {data.location}</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left column */}
                    <div>
                        <section className="mb-6">
                            <h3 className="text-lg font-bold border-b-2 border-blue-500 pb-1 mb-3">Professional Experience</h3>
                            {sections.experiences.map((experience, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-semibold">{experience.title}</h4>
                                    <p className="text-sm text-gray-600">{experience.company}</p>
                                    <p className="text-sm text-gray-500">
                                        {formatDate(experience.start_date)} - {experience.end_date ? formatDate(experience.end_date) : "Present"}
                                    </p>
                                    <p className="text-sm text-gray-700">{experience.description}</p>
                                </div>
                            ))}
                        </section>

                        <section className="mb-6">
                            <h3 className="text-lg font-bold border-b-2 border-blue-500 pb-1 mb-3">Education</h3>
                            {/* Education items */}
                        </section>
                    </div>

                    {/* Right column */}
                    <div>
                        <section className="mb-6">
                            <h3 className="text-lg font-bold border-b-2 border-blue-500 pb-1 mb-3">Projects</h3>
                            {/* Project items */}
                        </section>

                        <section className="mb-6">
                            <h3 className="text-lg font-bold border-b-2 border-blue-500 pb-1 mb-3">Skills & Certifications</h3>
                            {/* Skills and certifications */}
                        </section>

                        <section className="mb-6">
                            <h3 className="text-lg font-bold border-b-2 border-blue-500 pb-1 mb-3">Languages</h3>
                            {/* Languages */}
                        </section>
                    </div>
                </div>
            </div>
        )
    },

    minimal: {
        name: "Minimal",
        layout: [
            { type: "experiencias", position: { x: 30, y: 180 } },
            { type: "formaciones", position: { x: 30, y: 400 } },
            { type: "estudios", position: { x: 30, y: 520 } },
            { type: "proyectos", position: { x: 430, y: 180 } },
            { type: "certificaciones", position: { x: 430, y: 400 } },
            { type: "idiomas", position: { x: 430, y: 520 } },
            { type: "webs", position: { x: 30, y: 100 } },
        ],
        component: ({ data, sections }) => (
            <div className="bg-white p-8 font-sans max-w-4xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-light tracking-wide text-gray-900 uppercase">{data.name || "Your Name"}</h1>
                    <h2 className="text-lg font-normal text-gray-600 mt-1">{data.title || "Your Title"}</h2>
                    <div className="mt-3 text-sm text-gray-500 flex justify-center gap-4">
                        <span>{data.email}</span>
                        <span>•</span>
                        <span>{data.phone}</span>
                        <span>•</span>
                        <span>{data.location}</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-8">
                    <section>
                        <h3 className="text-base font-medium text-gray-800 uppercase tracking-wider mb-4">Experience</h3>
                        <div className="space-y-6">
                            {/* Experience items */}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-base font-medium text-gray-800 uppercase tracking-wider mb-4">Education</h3>
                        <div className="space-y-4">
                            {/* Education items */}
                        </div>
                    </section>

                    <div className="grid grid-cols-2 gap-8">
                        <section>
                            <h3 className="text-base font-medium text-gray-800 uppercase tracking-wider mb-4">Skills</h3>
                            <div className="space-y-2">
                                {/* Skills */}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-base font-medium text-gray-800 uppercase tracking-wider mb-4">Languages</h3>
                            <div className="space-y-2">
                                {/* Languages */}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    },

    creative: {
        name: "Creative",
        layout: [
            { type: "experiencias", position: { x: 350, y: 20 } },
            { type: "formaciones", position: { x: 350, y: 280 } },
            { type: "estudios", position: { x: 350, y: 430 } },
            { type: "proyectos", position: { x: 350, y: 580 } },
            { type: "certificaciones", position: { x: 20, y: 280 } },
            { type: "idiomas", position: { x: 20, y: 430 } },
            { type: "webs", position: { x: 20, y: 580 } },
        ],
        component: ({ data, sections }) => (
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 font-sans">
                <div className="flex">
                    {/* Left sidebar */}
                    <div className="w-1/3 bg-gradient-to-b from-blue-600 to-purple-700 text-white p-6 rounded-l-lg">
                        <div className="mb-8 text-center">
                            <div className="w-32 h-32 mx-auto bg-white rounded-full mb-4 overflow-hidden">
                                {/* Profile photo placeholder */}
                                <div className="w-full h-full bg-blue-300 flex items-center justify-center">
                                    <span className="text-3xl font-bold text-blue-700">
                                        {data.name ? data.name.charAt(0) : "Y"}
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold">{data.name || "Your Name"}</h1>
                            <h2 className="text-md opacity-80">{data.title || "Your Title"}</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-semibold mb-2 border-b border-white/30 pb-1">Contact</h3>
                                <div className="text-sm space-y-1">
                                    <p>{data.email}</p>
                                    <p>{data.phone}</p>
                                    <p>{data.location}</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-semibold mb-2 border-b border-white/30 pb-1">Languages</h3>
                                {/* Languages */}
                            </div>

                            <div>
                                <h3 className="text-sm uppercase tracking-wider font-semibold mb-2 border-b border-white/30 pb-1">Skills</h3>
                                {/* Skills */}
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="w-2/3 bg-white p-6 rounded-r-lg">
                        <section className="mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Professional Experience</h3>
                            {/* Experience items */}
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Education</h3>
                            {/* Education items */}
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Projects</h3>
                            {/* Projects */}
                        </section>
                    </div>
                </div>
            </div>
        )
    },

    executive: {
        name: "Executive",
        layout: [
            { type: "experiencias", position: { x: 20, y: 150 } },
            { type: "formaciones", position: { x: 20, y: 400 } },
            { type: "estudios", position: { x: 20, y: 550 } },
            { type: "proyectos", position: { x: 450, y: 150 } },
            { type: "certificaciones", position: { x: 450, y: 400 } },
            { type: "idiomas", position: { x: 450, y: 550 } },
            { type: "webs", position: { x: 20, y: 80 } },
        ],
        component: ({ data, sections }) => (
            <div className="bg-white p-8 font-serif">
                <header className="border-b-4 border-gray-800 pb-4 mb-6">
                    <h1 className="text-4xl font-bold text-gray-900">{data.name || "Your Name"}</h1>
                    <h2 className="text-xl font-semibold text-gray-700">{data.title || "Your Title"}</h2>
                    <div className="mt-2 text-gray-600 flex gap-6">
                        <span>{data.email}</span>
                        <span>{data.phone}</span>
                        <span>{data.location}</span>
                    </div>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    {/* Main content - 2/3 width */}
                    <div className="col-span-2">
                        <section className="mb-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">Professional Experience</h3>
                            {/* Experience items */}
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">Projects</h3>
                            {/* Projects */}
                        </section>
                    </div>

                    {/* Sidebar - 1/3 width */}
                    <div>
                        <section className="mb-6 bg-gray-100 p-4 rounded">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase">Education</h3>
                            {/* Education items */}
                        </section>

                        <section className="mb-6 bg-gray-100 p-4 rounded">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase">Certifications</h3>
                            {/* Certifications */}
                        </section>

                        <section className="mb-6 bg-gray-100 p-4 rounded">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase">Languages</h3>
                            {/* Languages */}
                        </section>
                    </div>
                </div>
            </div>
        )
    },

    technical: {
        name: "Technical",
        layout: [
            { type: "experiencias", position: { x: 20, y: 180 } },
            { type: "formaciones", position: { x: 20, y: 430 } },
            { type: "estudios", position: { x: 20, y: 580 } },
            { type: "proyectos", position: { x: 450, y: 180 } },
            { type: "certificaciones", position: { x: 450, y: 430 } },
            { type: "idiomas", position: { x: 450, y: 580 } },
            { type: "webs", position: { x: 20, y: 80 } },
        ],
        component: ({ data, sections }) => (
            <div className="bg-slate-900 text-slate-200 p-8 font-mono">
                <header className="border-b border-slate-700 pb-4 mb-6">
                    <h1 className="text-3xl font-bold text-green-400">{data.name || "Your Name"}</h1>
                    <h2 className="text-lg font-medium text-slate-400">{data.title || "Your Title"}</h2>
                    <div className="mt-2 text-slate-500 flex gap-6">
                        <span>{data.email}</span>
                        <span>|</span>
                        <span>{data.phone}</span>
                        <span>|</span>
                        <span>{data.location}</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-6">
                    <section>
                        <h3 className="text-green-400 font-bold mb-3 flex items-center">
                            <span className="inline-block w-3 h-3 bg-green-400 mr-2"></span>
                            TECHNICAL SKILLS
                        </h3>
                        {/* Skills */}
                    </section>

                    <section>
                        <h3 className="text-green-400 font-bold mb-3 flex items-center">
                            <span className="inline-block w-3 h-3 bg-green-400 mr-2"></span>
                            EXPERIENCE
                        </h3>
                        {/* Experience items */}
                    </section>

                    <section>
                        <h3 className="text-green-400 font-bold mb-3 flex items-center">
                            <span className="inline-block w-3 h-3 bg-green-400 mr-2"></span>
                            PROJECTS
                        </h3>
                        {/* Projects */}
                    </section>

                    <div className="grid grid-cols-2 gap-6">
                        <section>
                            <h3 className="text-green-400 font-bold mb-3 flex items-center">
                                <span className="inline-block w-3 h-3 bg-green-400 mr-2"></span>
                                EDUCATION
                            </h3>
                            {/* Education items */}
                        </section>

                        <section>
                            <h3 className="text-green-400 font-bold mb-3 flex items-center">
                                <span className="inline-block w-3 h-3 bg-green-400 mr-2"></span>
                                CERTIFICATIONS
                            </h3>
                            {/* Certifications */}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
};