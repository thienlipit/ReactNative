import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

const DocumentPickerEx = () => {
    const [imgResponse, setImgResponse] = useState<DocumentPickerResponse | undefined>();
    const openPicker = async () => {
        try {
            const response = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles],
                copyTo: 'cachesDirectory',
            });
            const uriImage = response;
            setImgResponse(uriImage);
            console.log(response);
            console.log(response.name);
            console.log(response.uri);

        } catch { }
    };

    return (
        <View style={styles.constainer}>
            <Button title="Choose a file" onPress={openPicker} />

            {imgResponse !== undefined ? (
                <View>
                    <Image style={{ height: 300, width: 300, marginTop: 20 }} source={{ uri: imgResponse?.uri }} />
                    <Text style={{ color: '#fff' }}>{imgResponse.name}</Text>
                </View>
            ) : undefined}

        </View>
    );
};

const styles = StyleSheet.create({
    constainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        height: 500,
    },
});

export default DocumentPickerEx;