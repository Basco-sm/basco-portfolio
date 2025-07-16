import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Home() {
    return (
        <motion.div
            className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero */}
            <section className="px-6 py-24 text-center bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-md">
                <motion.h1
                    className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    TOYINSOLA OBAYEMI
                </motion.h1>
                <motion.p
                    className="text-xl sm:text-2xl max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    UI/UX enthusiast and fullstack developer-in-training. I'm designing and building interfaces while learning, one project at a time.
                </motion.p>
                <motion.div
                    className="flex justify-center gap-4 flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to="/projects"
                        className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-md shadow hover:bg-indigo-100"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-indigo-700"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </section>

            {/* About snippet */}
            <section className="px-6 py-16 bg-white dark:bg-gray-900">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">Who am I?</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        I'm on a journey to become a professional UI/UX designer and fullstack
                        developer. I enjoy crafting clean, user-friendly interfaces using tools
                        like <strong>Figma</strong>, <strong>React</strong>, and <strong>Tailwind
                        CSS</strong>. On the backend, I build and manage applications using the
                        <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js).
                        I'm passionate about learning, growing, and exploring future
                        possibilities in tech. I also use <strong>Google Forms</strong> to
                        collect user feedback, which helps me create meaningful user personas
                        and improve product direction based on real insights.

                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-md">
                        I'm not a pro yet — but I'm growing every day. This portfolio is a reflection of that learning process.
                    </p>
                </div>
            </section>

        </motion.div>
    );
}