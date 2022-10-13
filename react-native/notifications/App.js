import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,

  })
});

export default function App() {

  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert('Permission required', 'Push notifications need the appropiate permissions')
        return;
      }
      const pushToken = await Notifications.getExpoPushTokenAsync();
      console.log(pushToken)

      if(Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }

    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log("Notification received");
      console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log(userName);
    })

    const subscripition1 = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("Notification received");
      console.log(response);
    });

    return () => {
      subscription.remove();
      subscripition1.remove();
    }
  }, []);

  function scheduleNotificationHandler() {
    //it returns a promise
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'Thi is the body of the notification.',
        data: { userName: 'Max' },
      },
      trigger: {
        seconds: 5
      }
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Schedule Notifications" onPress={scheduleNotificationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
