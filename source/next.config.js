/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            ref: true,
            svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] },
          },
        },
      ],
    });

    return config;
  },
}
