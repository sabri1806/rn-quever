import React, { useState, useEffect } from "react";
import { Text, Input } from "react-native-elements";
import { View, Button, Alert } from "react-native";
import styles from "./FavouriteCreate.styles";
import MovieService from "../../../../services/MovieService";
import { AsyncStorage } from "react-native";

const mockFavourite = {
  moviename: "",
  description: "",
  genre: "",
  year: "",
  cast: ""
};

const FavouriteCreate = ({ navigation }) => {
  const [newFavourite, setNewFavourite] = useState(mockFavourite);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUserFromStorage = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        if (userEmail !== null) {
          setCurrentUser(userEmail);
        }
      } catch (error) {
        console.log("We was not able to recover the user"); // eslint-disable-line
      }
    };

    getUserFromStorage();
  }, []);

  const onChange = (e, name) => {
    setNewFavourite({
      ...newFavourite,
      [name]: e.nativeEvent.text,
      email: currentUser
    });
  };

  const backToFavouriteList = () => {
    setNewFavourite(mockFavourite);
    navigation.navigate("Favourites");
  };

  const handleSaveFavourite = () => {
    MovieService.saveFavourite(newFavourite).then(() => {
      Alert.alert("Success", "Favourite movie was created!", [
        { text: "OK", onPress: () => backToFavouriteList() }
      ]);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            name="moviename"
            placeholder="name"
            value={newFavourite.moviename}
            onChange={text => onChange(text, "moviename")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="description"
            placeholder="description"
            value={newFavourite.description}
            onChange={text => onChange(text, "description")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="genre"
            placeholder="genre"
            value={newFavourite.genre}
            onChange={text => onChange(text, "genre")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="cast"
            placeholder="cast"
            value={newFavourite.cast}
            onChange={text => onChange(text, "cast")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="year"
            placeholder="year"
            value={newFavourite.year}
            onChange={text => onChange(text, "year")}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          color="#e67e22"
          title="Save Favourite"
          onPress={handleSaveFavourite}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button color="#e67e22" title="Back" onPress={backToFavouriteList} />
      </View>
    </View>
  );
};

export default FavouriteCreate;
