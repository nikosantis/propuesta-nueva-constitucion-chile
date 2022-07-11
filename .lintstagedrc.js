module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  '**/*.(ts|tsx)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ],
  '**/*.{css,scss,md,json}': filenames => [
    `yarn prettier --write ${filenames.join(' ')}`
  ]
}
