import React, { ReactNode } from "react";

type PopoverProps = {
    title: string;
    children: ReactNode;
};

export default function Popover({ children, title }: PopoverProps) {
    return (
        <div className="group relative cursor-pointer gap-2">
            <span className="dark:bg-secondary-dark bg-secondary text-primary dark:text-primary-dark invisible absolute bottom-4 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-lg pb-1 pl-2 pr-2 pt-1 text-xs group-hover:visible">
                {title}
            </span>
            {children}
        </div>
    );
}
