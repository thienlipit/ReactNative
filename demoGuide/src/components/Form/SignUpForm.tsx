import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').label('Name'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password'),
});
const SignUpForm = () => {
    return (
        <>
            <Text>Sign Up</Text>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}>
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
                            placeholder="Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        {errors.name && touched.name && (
                            <Text style={{ color: 'red' }}>{errors.name}</Text>
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
                        <TextInput
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            autoCapitalize="none"
                            secureTextEntry
                            textContentType="password"
                            value={values.password}
                        />
                        {errors.password && touched.password && (
                            <Text style={{ color: 'red' }}>{errors.password}</Text>
                        )}
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </>
    );
};
export default SignUpForm;