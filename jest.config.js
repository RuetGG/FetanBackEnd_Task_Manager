const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src', // 👈 This makes Jest look only inside 'src'
  testRegex: '.*\\.spec\\.ts$', // 👈 Only runs TypeScript test files
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};