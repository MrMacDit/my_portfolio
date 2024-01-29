const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  // ... other Vue CLI configuration

  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: "Caveat" }, // Add other fonts as needed
        ],
        formats: ["woff2"], // You can specify font formats (e.g., woff2, woff, ttf)
      }),
    ],
  },
};
