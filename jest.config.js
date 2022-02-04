const rootDir = process.cwd();

module.exports = {
  rootDir,
  roots: [
    'src',
    'test/unit/',
  ],
  testMatch: [
    `${rootDir}/test/unit/**/*.spec.js`,
  ],
  collectCoverageFrom: [
    'test/unit/**/*.spec.js',
    'src/**/*.js',
    '!node_modules/**',
    '!src/js/index.js',
  ],
  coverageDirectory: 'reports/unit/coverage/',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '[/\\\\]modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [
    './node_modules',
  ],
};
