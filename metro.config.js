const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// SVG transformer 설정
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

// SVG 파일 처리 설정
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);

config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

// TypeScript 설정 개선
config.resolver.platforms = ["ios", "android", "native", "web"];

module.exports = config;
