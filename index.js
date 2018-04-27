import { AppRegistry, YellowBox } from 'react-native';

import App from './app/App';

AppRegistry.registerComponent('ReactNativeApp', () => App);

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);