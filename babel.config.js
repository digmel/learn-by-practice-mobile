module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",

      {
        root: ["./src"],
        extensions: [".ts", ".ios.ts", ".android.ts", ".tsx"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@router": "./src/router",
          "@store": "./src/store",
          "@screens": "./src/screens",
          "@storage": "./src/storage",
          "@utilities": "./src/utilities",
          "@data": "./src/data",
          "@svg": "./src/svg",
        },
      },
    ],
    "react-native-reanimated/plugin", //Added for React Native Animation V2
  ],
};
