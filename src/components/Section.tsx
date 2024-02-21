import React, { ReactNode } from "react";

type SectionProps = {
    title: string;
    children?: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="flex flex-col gap-6">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="text-ms flex flex-col gap-4 text-left leading-7">
                {
                    children ? (
                        <>{children}</>
                    ) : (
                        <>Cette section est vide.</>
                    )
                }
            </div>
        </section>
    );
}
