import React, { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export default function Main({ children }: MainProps) {
    return <main className="flex grow flex-col gap-12 tracking-normal">{children}</main>;
}
