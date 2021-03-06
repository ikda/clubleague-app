import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import colors from "../../../colors";

const SearchBar = ({ onChange, value, onSubmit }) => (
  <TextInput
    style={{
      height: 35,
      backgroundColor: colors.whiteSmoke,
      padding: 10,
      borderRadius: 5,
      textAlign: "center",
      fontSize: 13,
      paddingLeft: 10,
      width: 300,
    }}
    returnKeyType="search"
    onChangeText={onChange}
    onEndEditing={onSubmit}
    value={value}
    placeholder={"Search for club, sport, leader"}
    placeholderTextColor={colors.darkGreyColor}
  />
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default SearchBar;
