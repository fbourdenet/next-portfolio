"use client";

import React, { useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function Switch() {
    const [isChecked, setIsChecked] = useState(false);

    const handleDarkMode = () => {
        const isDarkMode = document.documentElement.classList.contains("dark");

        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setIsChecked(!isChecked);
    };

    return (
        <>
            <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleDarkMode}
                        className="sr-only"
                    />
                    <div className="bg-other bg-secondary dark:bg-secondary-dark block h-6 w-10 rounded-full"></div>
                    <div
                        className={`dot bg-primary dark:bg-primary-dark absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full transition duration-300
              ${isChecked ? "translate-x-4" : ""}`}
                    >
                        {isChecked ? (
                            <IoMdMoon className="dark:text-secondary-dark h-3 w-3"></IoMdMoon>
                        ) : (
                            <IoMdSunny className="text-secondary h-3 w-3"></IoMdSunny>
                        )}
                    </div>
                </div>
            </label>
        </>
    );
}
