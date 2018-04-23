import { Platform } from 'react-native'

import { LogModuleIos } from './IosModules'
import { LogModuleAndroid } from './AndroidModules'

const LogModule = Platform.OS === 'android' ? LogModuleAndroid : LogModuleIos;

export {
    LogModule
}