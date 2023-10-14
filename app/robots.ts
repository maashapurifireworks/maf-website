export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sohel.tech/sitemap.xml",
    host: "https://sohel.tech",
  };
}
