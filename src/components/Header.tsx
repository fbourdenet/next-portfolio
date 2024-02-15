import React from "react";

import Switch from "./Switch";

export default function Header() {
    return (
        <header>
            <nav className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    <a href="/">f.</a>
                </h1>
                {/*
                    <ul className="flex gap-2">
                        <li><a className="hover:underline hover:font-medium" href="">about</a></li>
                        <div>|</div>
                        <li><a className="hover:underline hover:font-medium" href="">projects</a></li>
                        <div>|</div>
                        <li><a className="hover:underline hover:font-medium" href="">skills</a></li>
                    </ul>
                */}
                <Switch />
            </nav>
        </header>
    );
}
