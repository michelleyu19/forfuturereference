# For Future Reference

To build and run locally:
1. yarn install 
2. yarn start


Notes:

To run locally on a Mac (default), go to the `package.json` file and replace the scripts section with: 

```
  "scripts": {
    "start": "SET NODE_ENV=development& webpack-dev-server",
    "test": "eslint src",
    "build": "yarn clean; NODE_ENV=production webpack --colors",
    "clean": "rimraf dist",
    "deploy": "yarn build; surge -p dist -d ffr-test.surge.sh; yarn clean"
  },
```

To run locally on a Windows machine, go to the `package.json` file and replace the scripts section with: 

```  
"scripts": {
    "start": "SET NODE_ENV=development& webpack-dev-server",
    "test": "eslint src",
    "winbuild": "yarn clean & SET NODE_ENV=production & webpack --colors",
    "clean": "rimraf dist",
    "windeploy": "yarn winbuild & surge -p dist -d ffr-test.surge.sh & yarn clean"
  },
```