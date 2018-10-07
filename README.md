# WIP - gladys-dev-platform-front

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081 (8080 is default backend port)
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test

# run prettier 
npm run prettier
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


## Project structure

Classic preact app made with preact cli.

Entry Point is ``index.js`` but the App component is ``/src/components/app``

### Routing
Handled by [preact-router](https://github.com/developit/preact-router).
All Components attached to routes are placed in ``/src/routes``

### State management
App state is managed with [redux](https://redux.js.org/).

Actions are declared in ``/src/actions``

Reducers take place in ``/src/reducers``. We use ``combineReducers`` to separate store entries.

### API calls
Async fetches are made with [axios](https://github.com/axios/axios).

As we use redux, axios calls are made through [redux-axios](https://github.com/svrcekmichal/redux-axios-middleware) middleware.

### Styling
:warning: As we use a theme that does not managed ``modules: true`` config in webpack css-loader, we had to change that 
default parameter in preact-cli app. :warning:

See ``preact.config.js``


You cannot use : 
```
import style from './style.scss'
// ...
<div class={style.main}>
// ...
``` 
Just refer to standard css classes:
```
import './style.scss'
// ...
<div className='main'>
// ...
```
Ofc, CSS in JS is still possible.

### Code style
Based on default ``eslint-config-synacor`` with slightly differents rules :

- No tabs
- Semis

See ``.eslintrc.json``