import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        lang: "en",
        name: "Florian Bourdenet",
        description: "hey ! my name is florian, i'm 23 years old, and i'm a french full-stack developer based in nice, france.",
        icons: [
            {
                src: "favicon.ico",
                sizes: "48x48",
                type: "image/x-icon"
            }
        ],
        start_url: "/",
    }
}