import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

function PageHeader(){
  function handlerGoBack() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handlerGoBack}>
          <Image source={backIcon} resizeMode='contain'/>
        </BorderlessButton>

        <Image source={logoImg} resizeMode='contain'/>
      </View>
    </View>
  );
}

export default PageHeader;