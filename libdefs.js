import Jest from './node_modules/jest/';
import ReactNative from './node_modules/react-native/';
import ReactNavigation from './node_modules/react-navigation/';
import Redux from './node_modules/redux';
import ReactRedux from './node_modules/react-redux';

declare module 'jest' {
    declare module.exports: Jest
}

declare module 'react-native' {
    declare module.exports: ReactNative
}

declare module 'react-navigation' {
    declare module.exports: ReactNavigation
}

declare module 'redux' {
    declare module.exports: Redux
}

declare module 'react-redux' {
    declare module.exports: ReactRedux
}