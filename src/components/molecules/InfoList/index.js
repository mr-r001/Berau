import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcInfoList} from '../../../assets';
import {Gap} from '../../atoms';

const InfoList = ({text, active, onPress}) => {
  return active ? (
    <TouchableOpacity activeOpacity={0.7} style={styles.list} onPress={onPress}>
      <IcInfoList />
      <Gap width={5} />
      <Text style={styles.stared(active)}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.list}>
      <IcInfoList />
      <Gap width={5} />
      <Text style={styles.stared(active)}>{text}</Text>
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  stared: (active) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(16),
    color: active ? '#020202' : '#CCCCCC',
  }),
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
