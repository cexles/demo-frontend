module.exports = {
  '**/*.ts?(x)': () => 'yarn check-format',
  '**/*.{js?(x),ts?(x)}': () => 'yarn check-lint',
  '*/*.{js,jsx,ts,tsx,html,css,json}': () => 'yarn format',
};
