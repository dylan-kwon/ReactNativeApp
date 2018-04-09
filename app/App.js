import React from 'react';
import { StackNavigator as stackNavigator } from 'react-navigation';

import CleaningList from './screen/09_Networking/NetworkingApp';
import NavigationHome from './screen/10_NavigationHome/NavigationHome';
import TabNavigator from './screen/11_TabNavigator/TabNavigator';
import DrawerNavigator from './screen/12_DrawerNavigator/DrawerNavigator';
import Animation from './screen/13_Animation/Animation';

export default RootStackNavigator = stackNavigator(
    {
        Home: {
            screen: NavigationHome,
        },
        CleaningList: {
            screen: CleaningList
        },
        TabNavigator: {
            screen: TabNavigator
        },
        DrawerNavigator: {
            screen: DrawerNavigator
        },
        Animation: {
            screen: Animation
        }
    },
    {
        // headerMode: 'none'
    }
);