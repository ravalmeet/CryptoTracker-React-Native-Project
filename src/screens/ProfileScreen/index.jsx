import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { AntDesign , FontAwesome ,Entypo } from '@expo/vector-icons'; 
function Index() {


  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://raval.vercel.app/static/media/image.696643fe.jpg",
          }}
        />
        <Text style={styles.text}>This App is Created By Raval Meet.</Text>

        <Text
          style={styles.text2}
          onPress={() => Linking.openURL("https://raval.vercel.app/")}
        >
          Contact Me
        </Text>

        <View
        style={
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,

          }
        }
        >
        <AntDesign style={{paddingHorizontal:18}} name="github" size={32} color="white" />
        <FontAwesome name="whatsapp" style={{paddingHorizontal:18}} size={32} color="white" />
        <AntDesign style={{paddingHorizontal:18}} name="instagram" size={32} color="white" />
        <Entypo style={{paddingHorizontal:18}} name="linkedin" size={32} color="white" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 25,
    color: "white",
    marginBottom: 20,
  },

});

export default Index;
