import Reactotron from 'reactotron-react-native'
import { NativeModules } from 'react-native'

if (__DEV__) {
  let scriptHostname;
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron
    .configure({ host: scriptHostname })
    .useReactNative({
      networking: { // optionally, you can turn it off with false.
        ignoreUrls: /\/(www.google.com\/)$/,
      }
    })
    .connect();

  const yeOldeConsoleLog = console.log

  // make a new one
  console.log = (...args) => {
    // always call the old one, because React Native does magic swizzling too
    yeOldeConsoleLog(...args)

    // send this off to Reactotron.
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
    })
  }
}