import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { connect } from "react-redux";
import movieActions from "../redux/actions/movie.actions";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = ({ searchMovies }) => {
  const [searchText, setSearchText] = useState("");

  const handleTextChanged = text => {
    setSearchText(text);
  };

  const handleSearch = () => {
    searchMovies(searchText);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => handleTextChanged(text)}
        value={searchText}
      />
      <Button title="hola-10" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

const mapDispatchToProps = {
  searchMovies: movieActions.searchMovies
};

export default connect(null, mapDispatchToProps)(HomeScreen);
