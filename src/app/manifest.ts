import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Florian Bourdenet",
        short_name: "Florian Bourdenet",
        description:
            "hey ! my name is florian, i'm 23 years old, and i'm a french full-stack developer based in nice, france.",
        start_url: "/",
        display: "standalone",
        icons: [
            {
                src: "favicon.ico",
                sizes: "16x16",
                type: "image/x-icon",
            },
        ],
    };
}
