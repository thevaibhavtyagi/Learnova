import nextConfig from "eslint-config-next/core-web-vitals";

export default [
  ...nextConfig,
  {
    rules: {
      "no-console": "warn",
    },
  },
];
