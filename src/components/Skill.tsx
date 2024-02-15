import React, { ReactNode } from "react";

type SkillsProps = {
    subject: string;
    children: ReactNode;
};

export default function Skill({ subject, children }: SkillsProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex grow gap-4 font-medium">
                <p>{subject}</p>
            </div>
            <div className="flex gap-4">{children}</div>
        </div>
    );
}
