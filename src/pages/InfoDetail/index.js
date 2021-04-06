import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcTrash} from '../../assets';
import {Gap, Header} from '../../components';

const InfoDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Early warning dari sensor pH WMP 1 PT. Berau Coal
          </Text>
          <Gap height={25} />
          <View>
            <View style={styles.content}>
              <Text style={styles.label}>Posisi Sensor</Text>
              <Text style={styles.value}>Titik Penataan</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Nilai pH</Text>
              <Text style={styles.value}>3</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Konsentrasi TSS</Text>
              <Text style={styles.value}>150 mg/L</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Konsentrasi Fe</Text>
              <Text style={styles.value}>3 mg/L</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Konsentrasi Mn</Text>
              <Text style={styles.value}>1 mg/L</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Debit</Text>
              <Text style={styles.value}>1000 L/jam</Text>
            </View>
          </View>
        </View>
        <Gap height={11} />
        <View style={styles.button}>
          <IcTrash />
          <Gap width={10} />
          <Text style={styles.text}>Hapus</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: normalize(-20),
    borderTopLeftRadius: normalize(25),
    borderTopRightRadius: normalize(25),
    paddingVertical: normalize(25),
    paddingHorizontal: normalize(15),
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    shadowColor: '#020202',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: normalize(10),
    paddingHorizontal: normalize(35),
    paddingVertical: normalize(30),
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(13),
    color: '#000000',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: '#000000',
  },
  value: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(14),
    color: '#000000',
  },
  button: {
    backgroundColor: '#286090',
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(10),
    borderRadius: normalize(10),
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
