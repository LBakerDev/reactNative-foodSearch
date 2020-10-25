import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
    return (
        <View style={styles.viewStyles}>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }

})

export default SearchBar;