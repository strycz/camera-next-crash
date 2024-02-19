import { CameraView, useCameraPermissions } from "expo-camera/next";
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function App() {

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) return <View><Text> No permission</Text></View> 

  if (!permission.granted) return <View><Text>No permission granted</Text></View> 
  
  return (
    <View style={{flex: 1}}>
      <CameraView style={{flex: 1}} facing='back'/>
    </View>
  );
}


