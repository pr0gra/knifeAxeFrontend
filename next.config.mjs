/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    exportTrailingSlash: true,
    domains: ["nozhtopor.na4u.ru"],
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        "/": { page: "/" },
        "/CartPage": {page:"/CartPage"},
        "/Favourite": {page:"/Favourite"},
        "/Manufacturer": {page: "/Manufacturer"},
        "/News":{page: "/News"},
        "/ProductCard":{page:"/ProductCard"},
        "/Search":{page:"/Search"},
        // добавьте другие пути, которые нужно экспортировать
      };
    },
  },
};
