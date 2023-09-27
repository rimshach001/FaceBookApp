import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client'
import {getAuth,FacebookAuthProvider,signInWithCredential} from 'firebase/auth'
import {firebase} from './config'
import {LoginManager,AccessToken} from 'react-native-fbsdk-next'
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
export default function App() {
  const [initializing,setInitializing]=useState(true)
  const [user,setUser]=useState(false);
function onAuthStateChange(user){
  setUser(user);
  if(initializing) setInitializing(false)
}
useEffect(()=>{
  // console.log(firebase,"firebaseeee");
  const sub=firebase.auth().onAuthStateChanged(onAuthStateChange);
  console.log(sub);
  return sub;
},[])
const signin=async()=>{
  try{
    await LoginManager.logInWithPermissions(['public_profile','email']);
    const data = await AccessToken.getCurrentAccessToken();
    if(!data){
      return;
    }
    const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
    const auth=getAuth()
    const user=await signInWithCredential(auth,facebookCredential)
    console.log(user,"user fb");
  }catch(e){
    console.log("dataaaa");
    console.log(e,"error");
  }
  }

  const signout=async()=>{
    try{
      await firebase.auth().signOut()
    }catch(e){
      console.log(e,"signinout error");
    }
  }
  if(initializing) return null
  // console.log(user,"user");
  if(!user){
    return (
      <View style={styles.container}>
      <Text>facebook</Text>
      <Button title='login' onPress={signin}/>
    </View>
  );
}
return (
  <View style={styles.container}>
  <Text>Login</Text>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
