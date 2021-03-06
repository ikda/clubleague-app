import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import colors from '../../../colors';

import PlayersListItem from "../../components/items/PlayersListItem";
import clubplayers from "../../data/clubplayers";


export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>

        <FlatList
          data={clubplayers}
          renderItem={({item}) =>
            <PlayersListItem
              onPress={() => navigation.navigate('Profile')}
              profileImg={item.profileImg}
              user={item.user}
              address={item.address}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: colors.clBackgroundColor,
  },
});
