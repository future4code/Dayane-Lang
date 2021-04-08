module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-javascript",
      [
        "@babel/preset-env",
        {
          targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1",
            esmodules: true,
          },
        },
      ],
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };
};
