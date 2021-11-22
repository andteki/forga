import React from 'react';
import {
    Text, 
    View, 
    TouchableHighlight
} from 'react-native';

import styles from './Button.style.js';

export default (title, handleButton) => {
    return(
        <View>
            <TouchableHighlight
                style={styles.runButton}
                onPress={handleButton}
                >
                <Text style={styles.runText}>{title}</Text>
            </TouchableHighlight>            
        </View>
    );
}