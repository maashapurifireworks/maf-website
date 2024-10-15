import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ma Ashapuri Fatakda (Fireworks)",
    short_name: "Ma Ashapuri Fatakda",
    description: "Ma Ashapuri Fatakda (Fireworks)",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
