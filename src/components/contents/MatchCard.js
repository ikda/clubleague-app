import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

const MatchCard = ({
    onPress,
    profileOnPress,
    profileImg,
    username,
    area,
    bodyText
  }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.profileWrap}>
          <TouchableOpacity
            style={styles.profileImgButton}
            onPress={profileOnPress}
          >
            <Image
              source={require('../../data/ImgTest/cccc.jpg')}
              style={styles.profileImg}
            />
          </TouchableOpacity>
          <View style={styles.profileTextWrap}>
            <Text style={styles.profileUserText}>{username}</Text>
            <Text>{area}</Text>
          </View>
        </View>

        <View style={styles.bodyWrap}>
          <View style={styles.bodyTextWrap}>
            <Text style={styles.bodyText}>{bodyText}</Text>
          </View>

          <View style={styles.bodyGameWrap}>
            <Text style={styles.gameText}><Text>4</Text> TeamGame</Text>
            <Text style={styles.remainText}><Text>1</Text> Remain</Text>
            <View style={{ paddingRight: 2 }}>
              <Image
                source={require('../../data/ImgTest/1ars.jpg')}
                style={styles.clubImg}
              />
            </View>
            <View style={{ paddingRight: 2 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={styles.clubImg}
              />
            </View>
            <View style={{ paddingRight: 2 }}>
              <Image
                source={require('../../data/ImgTest/2bar.jpg')}
                style={styles.clubImg}
              />
            </View>
          </View>



        </View>




      </TouchableOpacity>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollWrap}
      >
        <View style={styles.colorBoxWrap}>
          <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.emerald }]}>
            <Text style={styles.colorBoxSport}>Soccer</Text>
          </View>
          <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.blueColor, marginLeft: 5 }]}>
            <MaterialCommunityIcons
              name="stadium-variant"
              color={colors.white}
              size={22}
              style={styles.colorBoximg}
            />
            <Text style={styles.colorBoxText}>Buenos Aires</Text>
          </View>
          <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.redColor, marginLeft: 5 }]}>
            <Feather
              name="calendar"
              color={colors.white}
              size={22}
              style={styles.colorBoximg}
            />
            <Text style={styles.colorBoxText}>Jul 20</Text>
          </View>
          <View style={[styles.colorBoxTextWrap, { backgroundColor: colors.yellowGreen, marginLeft: 5 }]}>
            <Feather
              name="clock"
              color={colors.white}
              size={22}
              style={styles.colorBoximg}
            />
            <Text style={styles.colorBoxText}>10:00~14:00</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottmWrap}>
        <Text note style={{ color: colors.darkGreyColor, fontSize: 12 }}>PM 5 : 20, Jan 15, 2020</Text>
      </View>

    </View>
  );
};

export default MatchCard;


const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  profileWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  profileImgButton: {
    paddingRight: 10,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileTextWrap: {
    justifyContent: 'center',
  },
  profileUserText: {
    fontWeight: 'bold',
  },
  bodyWrap: {
    backgroundColor: colors.ghostWhite,
  },
  bodyTextWrap: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.darkGreyColor,
  },
  bodyGameWrap: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  gameText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  remainText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    fontWeight: 'bold',
    color: colors.redColor,
  },
  clubImg: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  scrollWrap: {
    alignItems: 'center',
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: colors.ghostWhite,
  },
  colorBoxWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  colorBoxTextWrap: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: 25,
    borderRadius: 5,
  },
  colorBoximg: {
    paddingLeft: 5,
  },
  colorBoxSport: {
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.white,
  },
  colorBoxText: {
    paddingLeft: 5,
    paddingRight: 8,
    color: colors.white,
  },
  bottmWrap: {
    flex: 1,
    paddingLeft: 15,
  },
});
