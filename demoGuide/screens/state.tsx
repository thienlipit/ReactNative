// import React, {useState} from "react";
// import {Button, View, Text, Alert, TouchableOpacity} from "react-native";

// const Cat = (props: any)=> {
//     const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name} , and I am {isHungry ? "hungry" : "full"}!
//       </Text>

//       <Button
//         onPress={() => {
//           setIsHungry(false);
//           Alert.alert('press register')
//         }}
//         disabled={!isHungry}
//         // title={"Pour me some milk, please!"}
//         title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
//       />

//         {/* <TouchableOpacity
//             onPress={() => {
//                 Alert.alert('press register')
//             }}>
//             <Text style={{
//                         padding: 8,
//                         fontSize: 20,
//                         color: 'black',
//                         alignSelf: 'center',
//                         marginHorizontal: 5
//                     }}>Use other methods ?</Text>
//         </TouchableOpacity> */}

//     </View>
//   );

// }

// const Cafe = () => {
//     return (
//         // <View>
//         // <TouchableOpacity
//         //             onPress={() => {
//         //                 Alert.alert('press register')
//         //             }}>
//         //             <Text style={{
//         //                 padding: 8,
//         //                 fontSize: 20,
//         //                 color: '#ED6263',
//         //                 alignSelf: 'center'
//         //             }}>New user? Register now</Text>
//         // </TouchableOpacity>

//         // </View>


//       <>
//         <Cat name="cat"/>
//         <Cat name="dog"/>

//       </>
//     );
//   }
  
//   export default Cafe;



import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const Cafe = () => (
  <View style={styles.container}>
    <Button title="Show alert from state" onPress={showAlert} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Cafe;