import React from 'react';

import {Text, View, Button} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const App = () => {
  GoogleSignin.configure({
    webClientId:
      '1072095487828-m7panf3uan4gtej7s0ft4jcmc51i3vrr.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const signOutWithGoogleAsync = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
     
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
      <Text> Hello world here ok men</Text>
      <Button title="Google Sign-In" onPress={signInWithGoogleAsync} />
      <Button title="Google Sign-Out" onPress={signOutWithGoogleAsync} />

      <GoogleSigninButton
                style={{width: 250, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signInWithGoogleAsync}
              />
    </View>
  );
};

export default App;
