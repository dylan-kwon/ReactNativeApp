import React from 'react';
import { TabNavigator as tabNavigator, TabBarBottom } from 'react-navigation';

import LayoutApp from '../03_layout/LayoutApp';
import ScrollViewApp from '../06_ScrollView/ScrollViewApp';
import ListViewApp from '../07_ListViewApp/ListViewApp';

export default TabNavigator = tabNavigator(
    {
        ScrollApp: {
            screen: ScrollViewApp,
        },
        LayoutApp: {
            screen: LayoutApp,
        },
        ListViewApp: {
            screen: ListViewApp,
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#eeeeee',
            style: {
                height: 52,
                backgroundColor: '#3dbff0',
                paddingTop: 2,
                paddingBottom: 2
            },
            tabStyle: {
                height: 52
            },
            labelStyle: {
                fontSize: 14,
                alignSelf: 'center',
            }
        },
        tabBarComponent: TabBarBottom,
        lazy: false,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        backBehavior: 'none',
    }
);