import React from 'react';
import {
    Text, 
    View, 
    TouchableHighlight
} from 'react-native';

import styles from './Button.style.js';

export default ({title, onPress}) => {
    return(
        <View>
            <TouchableHighlight
                style={styles.runButton}
                onPress={onPress}
                >
                <Text style={styles.runText}>{title}</Text>
            </TouchableHighlight>            
        </View>
    );
}