/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// const SITE = require("./pages/config").SITE;

// /** @type {import('next').NextConfig} */
// module.exports = {
//   // webpack: (config, { isServer }) => {
//   //   if (!isServer) {
//   //     // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//   //     config.resolve.fallback = {
//   //       fs: false,
//   //     };
//   //   }

//   //   return config;
//   // },
//   reactStrictMode: true,

//   trailingSlash: SITE.trailingSlash,
//   basePath: SITE.basePathname !== "/" ? SITE.basePathname : "",

//   swcMinify: true,
//   poweredByHeader: false,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "source.unsplash.com",
//       },
//     ],
//   },
//   experimental: { appDir: true },
// };
