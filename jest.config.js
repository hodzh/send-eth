module.exports = {
  'automock'            : false,
  'setupFiles'          : [
    './jest.setup.js',
  ],
  'roots'               : [
    './src',
  ],
  'transform'           : {
    '.*\.tsx?$': 'ts-jest',
  },
  'testRegex'           : '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
};