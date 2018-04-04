import React from 'react';
import { StackNavigator as stackNavigator } from 'react-navigation';

import CleaningList from './screen/09_Networking/NetworkingApp';
import NavigationHome from './screen/10_NavigationHome/NavigationHome';

export default RootStackNavigator = stackNavigator({
    Home: {
        screen: NavigationHome,
        // navigationOptions: {
        //     headerTitle: 'Home'
        // }
    },
    CleaningList: {
        screen: CleaningList,
        // navigationOptions: {
        //     headerTitle: 'CleaningList',
        //     headerTintColor: '#2a2a2a',
        //     headerStyle: {
        //         backgroundColor: '#ffffff'
        //     },
        //     headerTitleStyle: {
        //         fontSize: 20
        //     }
        // }
    }
});