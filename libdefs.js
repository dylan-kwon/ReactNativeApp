import Jest from './node_modules/jest/'
import ReactNative from './node_modules/react-native/'
import ReactNavigation from './node_modules/react-navigation/'
import PropTypes from './node_modules/prop-types/'

declare module 'jest' {
    declare module.exports: Jest
}

declare module 'react-native' {
    declare module.exports: ReactNative
}

declare module 'react-navigation' {
    declare module.exports: ReactNavigation
}

declare module 'prop-types' {
    declare module.exports: PropTypes
}