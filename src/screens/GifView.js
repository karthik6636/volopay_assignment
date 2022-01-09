import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';
import StickyHeader from './StickyHeader';
import {
  GiphyMediaView,
  GiphyContent,
  GiphyGridView,
} from '@giphy/react-native-sdk';

export default function GifView({route, navigation}) {
  const {id} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StickyHeader />
        <Text style={styles.text}>{id.data.title}</Text>
        <View style={styles.mediaView}>
          <GiphyMediaView media={id} style={{aspectRatio: id.aspectRatio}} />
        </View>
        <Text style={styles.text}>Description</Text>
        <Text
          style={{
            fontSize: 16,
            color: '#444',
            margin: 10,
          }}>
          {id.data.user.description}
        </Text>
        <Text style={styles.text}>Recent GIFs</Text>
        <GiphyGridView
          content={GiphyContent.recents()}
          cellPadding={20}
          style={{height: 500}}
          onMediaSelect={e => {
            console.log(e.nativeEvent.media);
            navigation.navigate('GifView', {
              id: e.nativeEvent.media,
            });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 10,
    margin: 10,
  },
  mediaView: {margin: 10, borderRadius: 10},
});
