import React, { ReactNode } from "react";

type TimelineProps = {
    year: string;
    diploma: string;
    school: string;
};

export default function Timeline({ year, diploma, school }: TimelineProps) {
    return (
        <ul className="border-secondary dark:border-secondary-dark relative ml-2 border-s">
            <li className="ms-8 flex flex-col">
                <div className="bg-secondary dark:bg-secondary-dark border-secondary dark:border-primary-dark absolute -start-1.5 h-3 w-3 rounded-full border "></div>
                <time className="-mt-0.5 mb-2 text-xs font-medium">{year}</time>
                <h1 className="text-lg font-medium">{diploma}</h1>
                <p className="text-ms">at {school}</p>
            </li>
        </ul>
    );
}
