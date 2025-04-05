export const CV_TEMPLATES = {
    BASIC: {
        id: "BASIC",
        name: "Basic Template",
        layout: [
            { type: "personal", position: { x: 50, y: 50 } },
            { type: "experience", position: { x: 50, y: 200 } },
            { type: "education", position: { x: 50, y: 400 } },
            { type: "skills", position: { x: 50, y: 600 } },
        ],
    },
    MODERN: {
        id: "MODERN",
        name: "Modern Template",
        layout: [
            { type: "personal", position: { x: 50, y: 50 } },
            { type: "experience", position: { x: 300, y: 50 } },
            { type: "education", position: { x: 50, y: 300 } },
            { type: "skills", position: { x: 300, y: 300 } },
        ],
    },
    CREATIVE: {
        id: "CREATIVE",
        name: "Creative Template",
        layout: [
            { type: "personal", position: { x: 50, y: 50 } },
            { type: "experience", position: { x: 50, y: 250 } },
            { type: "education", position: { x: 50, y: 450 } },
            { type: "skills", position: { x: 50, y: 650 } },
        ],
    },
};