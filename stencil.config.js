exports.config = {
  namespace: 'my-component',
  generateDistribution: true,
  generateWWW: false,
  serviceWorker: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
