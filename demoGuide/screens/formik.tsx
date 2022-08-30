// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet, Alert, Text, Keyboard } from 'react-native';
import { Formik } from 'formik';

const MyReactNativeForm = (props:any) => (
//   <Formik
//     initialValues={{ email: '' }}
//     onSubmit={values => console.log(values)}
//   >
//     {({ handleChange, handleBlur, handleSubmit, values }) => (
//       <View>
//         <TextInput
//           onChangeText={handleChange('email')}
//           onBlur={handleBlur('email')}
//           value={values.email}
//         />
//         <Button onPress={handleSubmit} title="Submit" />
//       </View>
//     )}
//   </Formik>
<View style={styles.content}>
          <Formik 
            initialValues={{ firstName: "", email: "" }} 
            validate={values => {
              let errors = {email: ""};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
            //   return errors;
            }}
            onSubmit={values => {
                Alert.alert(values.email + values.firstName);
                // Keyboard.dismiss();
              }
            }
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                //   label="First name"
                  placeholder="I am ready!"
                />

                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                //   label="Email:"
                  placeholder="Email address"
                //   error={errors.email}
                />
                {/* <Text>{errors.email}</Text> */}
                <Text>{errors.email}</Text>

                {/* <Button onPress={handleSubmit} style={styles.button}>Submit.</Button> */}
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>        
</View>
      
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
    },
    content: {
      padding: 16,
    },
    button: {
      marginTop: 26,
      paddingVertical: 10,
      backgroundColor: "silver"
    }
  });

export default MyReactNativeForm;