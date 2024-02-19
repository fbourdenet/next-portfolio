"use client";

import React, { useLayoutEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function Switch() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useLayoutEffect(() => {
        const dark = localStorage.getItem('dark');

        if (!dark || dark === "false") {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }

        setIsDarkMode(dark === "true");
    }, []);

    const handleDarkMode = () => {
        const newDarkMode = !isDarkMode;

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        setIsDarkMode(newDarkMode);
        localStorage.setItem('dark', newDarkMode.toString());
    };

    return (
        <>
            <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={handleDarkMode}
                        className="sr-only"
                    />
                    <div className="bg-other bg-secondary dark:bg-secondary-dark block h-6 w-10 rounded-full"></div>
                    <div
                        className={`dot bg-primary dark:bg-primary-dark absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full transition duration-300
              ${isDarkMode ? "translate-x-4" : ""}`}
                    >
                        {isDarkMode ? (
                            <IoMdMoon className="dark:text-secondary-dark h-3 w-3"></IoMdMoon>
                        ) : (
                            <IoMdSunny className="text-secondary h-3 w-3"></IoMdSunny>
                        )
                        }

                    </div>
                </div>
            </label>
        </>
    );
}
