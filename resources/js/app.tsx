import '../css/app.css';
import './bootstrap';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <AnimatePresence mode="wait">
                <motion.div
                    key={props.initialPage.url} // Use the URL as the key
                    initial={{ opacity: 0, y: 20 }} // Fade in and slide up
                    animate={{ opacity: 1, y: 0 }} // Fully visible
                    exit={{ opacity: 0, y: -20 }} // Fade out and slide down
                    transition={{ duration: 0.3, ease: 'easeInOut' }} // Smooth transition
                >
                    <App {...props} />
                </motion.div>
            </AnimatePresence>
        );
    },
});