import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Balance = (Props) => {
    return (
        <View style={styles.container}> 
            <View >
                <View style={{flexDirection:'column'}}>
                <FontAwesome name="money" size={24} color="black" />
                <Text style={{fontSize:16}}>{Props.Pamt}</Text>
                </View>
            </View>

            <View >
                <View style={{flexDirection:'column'}}>
                <FontAwesome name="bank" size={24} color="black" />
                <Text  style={{fontSize:16}}>{Props.Damt}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'purple',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
   
});

export default Balance;
