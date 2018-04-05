import React from 'react';
import { StackNavigator as stackNavigator } from 'react-navigation';

import CleaningList from './screen/09_Networking/NetworkingApp';
import NavigationHome from './screen/10_NavigationHome/NavigationHome';

export default RootStackNavigator = stackNavigator({
    Home: {
        screen: NavigationHome,
    },
    CleaningList: {
        screen: CleaningList
    }
});