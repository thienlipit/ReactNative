// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet, Alert, Text, Keyboard } from 'react-native';
import { Formik, useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Name is required').label('firstName'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  // password: Yup.string()
  //   .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
  //   .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
  //   .matches(/\d/, 'Password must have a number')
  //   .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //   .required('Password is required')
  //   .label('Password'),
});

const MyReactNativeForm = () => {

  return (

    <>
      <Text>Sign Up</Text>
      <Formik

        initialValues={{ firstName: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          Alert.alert(values.firstName +"\n"+ values.email);
          console.log(values)
        }
        }>

        {({ 
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              placeholder="first name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              autoCorrect={false}
  

            />

            {errors.firstName && touched.firstName && (
              <Text style={{ color: 'red' }}>{errors.firstName}</Text>
            )}

            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize="none"
              // autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{ color: 'red' }}>{errors.email}</Text>
            )}

            {/* <Button onPress={handleSubmit} style={styles.button}>Submit.</Button> */}
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </>
  );
};

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