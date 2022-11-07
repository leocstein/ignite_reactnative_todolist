import { View, Text, Image } from 'react-native'
import React from 'react'

import {styles} from './styles'

export default function Logo() {
  return (
    <View style={styles.logoBackgroud}>
        <Image
          source={require("../../assets/Logo.png")}
          style={styles.logoImage}
        />
      </View>
  )
}