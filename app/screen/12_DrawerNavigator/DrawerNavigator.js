import React from 'react';
import { DrawerNavigator as drawerNavigator } from 'react-navigation';

import TextInputApp from '../04_TextInput/TextInputApp.js'
import LayoutApp from '../03_layout/LayoutApp';
import ListViewApp from '../07_ListViewApp/ListViewApp';

export default DrawerNavigator = drawerNavigator(
    {
        TextInputApp: {
            screen: TextInputApp
        },
        LayoutApp: {
            screen: LayoutApp
        },
        ListViewApp: {
            screen: ListViewApp
        }
    },
    {
        titloe: 'test',
        drawerWidth: 270,
        drawerPosition: 'left',
        drawerBackgroundColor: '#ffffff',
        contentOptions: {
            activeTintColor: '#3dbff0',
            inactiveTintColor: '#9b9b9b',
            activeBackgroundColor: '#efeff4',
            inactiveBackgroundColor: '#ffffff',
        }
    }
);