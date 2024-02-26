import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        lang: "en",
        name: "Florian Bourdenet",
        description: "hey ! my name is florian, i'm 23 years old, and i'm a french full-stack developer based in nice, france.",
        icons: [
            {
                src: "icon_256x256.jpg",
                sizes: "256x256",
                type: "image/x-icon"
            }
        ],
        start_url: "/",
        display: "standalone",
        orientation: "landscape"
    }
}