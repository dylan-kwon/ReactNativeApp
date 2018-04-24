import App from './app/App';
import { AppRegistry, Platform, YellowBox } from 'react-native';

AppRegistry.registerComponent('ReactNativeApp', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);