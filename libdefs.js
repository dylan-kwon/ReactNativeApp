import Jest from './node_modules/jest'
import ReactNative from './node_modules/react-native/'

declare module 'react-native' {
    declare module.exports: ReactNative
}

declare module 'jest' {
    declare module.exports: Jest
}