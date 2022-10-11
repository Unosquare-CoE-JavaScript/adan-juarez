import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

// avoid the same name in drawer than the routes
const DrawerNavigator = ({ name, component }) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={name} component={component} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator