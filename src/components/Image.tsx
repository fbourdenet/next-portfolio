import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    caption?: string;
}

export default function Image(props: ImageProps) {
    return (
        <div className="flex flex-col gap-4">
            <img className="w-full rounded-lg" {...props} alt={props.alt} />
            {props?.caption && (
                <figcaption className="text-center text-xs underline">
                    {props.caption}
                </figcaption>
            )}
        </div>
    );
}
