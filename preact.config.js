var path = require('path')

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  /** you can change config here **/
  // override css-loader to make theme scss work
  config.module.loaders[4].loader[2].options.modules = false
  config.module.loaders[4].include = [
    path.resolve(__dirname, 'src', 'routes'),
    path.resolve(__dirname, 'src', 'components'),
    path.resolve(__dirname, 'src', 'shared')
  ];
  config.module.loaders[5].exclude = [
    path.resolve(__dirname, 'src', 'routes'),
    path.resolve(__dirname, 'src', 'components'),
    path.resolve(__dirname, 'src', 'shared')
  ];

}
