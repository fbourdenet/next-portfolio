"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function Switch() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme, theme } = useTheme()

    console.log(resolvedTheme, theme)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleDarkMode = () => {
        const newDarkMode = resolvedTheme === 'light' ? 'dark' : 'light';
        setTheme(newDarkMode)
    };

    return (
        <>
            <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={resolvedTheme === "dark"}
                        onChange={handleDarkMode}
                        className="sr-only"
                    />
                    <div className="bg-other bg-secondary dark:bg-secondary-dark block h-6 w-10 rounded-full"></div>
                    <div
                        className={`dot bg-primary dark:bg-primary-dark absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full transition duration-300
              ${mounted && resolvedTheme === "dark" ? "translate-x-4" : ""}`}
                    >
                        {
                            mounted && (
                                resolvedTheme === "dark" ? (
                                    <IoMdMoon className="dark:text-secondary-dark h-3 w-3"></IoMdMoon>
                                ) : (
                                    <IoMdSunny className="text-secondary h-3 w-3"></IoMdSunny>
                                )
                            )
                        }

                    </div>
                </div>
            </label>
        </>
    );
}
