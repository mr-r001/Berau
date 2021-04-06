import Axios from 'axios';
import 'moment/locale/id';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch} from 'react-redux';
import {Button, Gap, HeaderDetail, Select} from '../../components';
import {setLoading} from '../../redux/action';
import {getData, showMessage, useForm} from '../../utils';

const EditAttendance = ({navigation, route}) => {
  const {id, nama, status, id_wmp} = route.params;
  const [token, setToken] = useState('');
  const [form, setForm] = useForm({
    nama: nama,
    status: status,
    id_wmp: id_wmp,
  });

  const dispatch = useDispatch();

  const API_HOST = {
    url: 'https://berau.mogasacloth.com/api/v1',
  };

  useEffect(() => {
    getData('token').then((res) => {
      setToken(res.value);
    });
  }, []);

  const onSubmit = () => {
    dispatch(setLoading(true));
    Axios.put(`${API_HOST.url}/pegawai/update/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(setLoading(false));
        showMessage(res.data.meta.message, 'success');
        navigation.replace('PersonalData');
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log(err);
      });
  };

  return (
    <View style={styles.page}>
      <HeaderDetail
        onPress={() => navigation.goBack()}
        company="PT. Berau Coal"
      />
      <Gap height={11} />
      <View style={styles.card}>
        <View style={styles.form}>
          <Text style={styles.label}>Nama</Text>
          <View style={styles.textInput}>
            <TextInput
              value={form.nama}
              style={styles.height}
              placeholder="Masukkan Nama"
              onChangeText={(value) => setForm('nama', value)}
            />
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Status</Text>
          <Select
            value={form.status}
            type="Status"
            onSelectChange={(value) => {
              setForm('status', value);
            }}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>WMP</Text>
          <Select
            value={form.id_wmp}
            type="WMP"
            onSelectChange={(value) => {
              setForm('id_wmp', value);
            }}
          />
        </View>
        <View>
          <Button text="Save Changes" onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

export default EditAttendance;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 10,
    margin: normalize(11),
    paddingVertical: normalize(22),
    paddingHorizontal: normalize(18),
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: '#000000',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#286090',
    borderRadius: normalize(10),
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    marginTop: normalize(5),
    marginBottom: normalize(11),
    paddingHorizontal: normalize(15),
    height: normalize(40),
  },
});
