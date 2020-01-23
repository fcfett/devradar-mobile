import React, { useEffect, useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import { colors } from '../../../styles';

import { getDevs } from '../../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../../services/socket';

export default ({ navigation }) => {
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        });
      }
    })();
  }, []);

  useEffect(() => {
    subscribeToNewDevs((dev) => setDevs([...devs, dev]));
  }, [devs]);

  const setupWebsocket = () => {
    disconnect();
    const { latitude, longitude } = currentRegion;
    connect(latitude, longitude, techs);
  };

  const loadDevs = async () => {
    const { latitude, longitude } = currentRegion;
    const { data } = await getDevs({
      params: {
        latitude,
        longitude,
        techs
      }
    });
    setDevs(data);
    setupWebsocket();
  };

  return (
    currentRegion && (
      <>
        <KeyboardAvoidingView
          enabled
          behavior="height"
          keyboardVerticalOffset={100}
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <MapView
            style={{ flex: 1 }}
            initialRegion={currentRegion}
            onRegionChangeComplete={setCurrentRegion}
          >
            {devs.map((dev) => (
              <Marker
                key={dev._id}
                coordinate={{
                  latitude: dev.location.coordinates[1],
                  longitude: dev.location.coordinates[0]
                }}
              >
                <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />
                <Callout
                  onPress={() =>
                    navigation.navigate('Profile', { github_username: dev.github_username })
                  }
                >
                  <View style={styles.callout}>
                    <Text style={styles.name}>{dev.name || dev.github_username}</Text>
                    {dev.bio && <Text style={styles.bio}>{dev.bio}</Text>}
                    <Text>{dev.techs.join(', ')}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
          <View style={styles.searchForm}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar devs por techs..."
              placeholderTextColor={colors.greyMedium}
              autoCapitalize="words"
              autoCorrect={false}
              value={techs}
              onChangeText={setTechs}
            />
            <TouchableOpacity style={styles.searchButton} onPress={loadDevs}>
              <MaterialIcons name="my-location" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </>
    )
  );
};
