import React from 'react';
import { StackNavigator as stackNavigator } from 'react-navigation';

import CleaningList from './screens/09_Networking/NetworkingApp';
import NavigationHome from './screens/10_NavigationHome/NavigationHome';
import TabNavigator from './screens/11_TabNavigator/TabNavigator';
import DrawerNavigator from './screens/12_DrawerNavigator/DrawerNavigator';
import Animation from './screens/13_Animation/Animation';
import ViewPager from './screens/14_ViewPager/ViewPager';
import Kakao from './screens/15_Kakao/Kakao';
import Redux from './screens/17_Redux';

export const screenTag: Object = {
    HOME: 'Home',
    CLEANING_LIST: 'CleaningList',
    TAB_NAVIGATOR: 'TabNavigator',
    DRAWER_NAVIGATOR: 'DrawerNavigator',
    ANIMATION: 'Animation',
    VIEWPAGER: 'ViewPager',
    KAKAO: 'Kakao',
    REDUX: 'Redux',
}

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
        },
        ViewPager: {
            screen: ViewPager
        },
        Kakao: {
            screen: Kakao
        },
        Redux: {
            screen: Redux
        }
    },
    {
        // headerMode: 'none'
    }
);