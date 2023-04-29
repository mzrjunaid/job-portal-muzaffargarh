import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";

export default function ImagePickerButton({ pickedImage }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
  };

  useEffect(() => {
    if (!image) {
      return;
    }
    pickedImage(image);
  }, [image]);

  return <Button title="Pick an image from camera roll" onPress={pickImage} />;
}
