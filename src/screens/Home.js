import React, {useState, useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  GiphyContentType,
  GiphyDialog,
  GiphyDialogEvent,
  GiphyDialogMediaSelectEventHandler,
  GiphyMedia,
  GiphySDK,
  GiphyVideoView,
  GiphyGridView,
  GiphyContent,
  GiphyMediaType,
  GiphyDirection,
  GiphyClipsRendition,
  GiphyRendition,
  GiphyMediaView,
} from '@giphy/react-native-sdk';
import IconComponent from '../components/IconComponent';
import colors from '../config/colors';
import StickyHeader from '../screens/StickyHeader';

GiphySDK.configure({apiKey: 'g5NRD5ilA25rIR0z9SnqJ4CuNfSHtVc5'});

const ProfileItem = ({searchQuery}) => {
  return (
    <>
      <View style={{margin: 10}}>
        <Text style={styles.text}>{searchQuery}</Text>

        <Text style={styles.text}>Stickers</Text>
        <GiphyGridView
          content={GiphyContent.trendingStickers()}
          cellPadding={10}
          style={{
            height: 80,
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 20,
          }}
          //fixedSizeCells={true}
          orientation={GiphyDirection.Horizontal}
          showCheckeredBackground={false}
          renditionType={GiphyRendition.Original}
          //clipsPreviewRenditionType={GiphyClipsRendition.FixedWidth}
          spanCount={1}
        />
        <Text style={styles.text}>GIFs</Text>
        <GiphyGridView
          content={GiphyContent.search({searchQuery: searchQuery})}
          cellPadding={25}
          style={{height: 500, marginTop: 15}}
          //onMediaSelect={e => setMedia(e.nativeEvent.media)}
        />
      </View>
    </>
  );
};

export default function Home({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StickyHeader />
          <View style={{backgroundColor: colors.dodgerblue}}>
            <TextInput
              onChangeText={setSearchQuery}
              placeholder="Search for GIFs and Stickers"
              value={searchQuery}
              style={styles.textinput}
            />
            <IconComponent
              name="magnify"
              fill={colors.black}
              style={styles.icon1}
              size={20}
            />
          </View>

          {searchQuery !== '' ? (
            <ProfileItem searchQuery={searchQuery} />
          ) : (
            <View style={{margin: 10}}>
              <Text style={styles.text}>Trending Tenor Searches</Text>
              <GiphyGridView
                content={GiphyContent.trendingText()}
                showCheckeredBackground={false}
                style={{height: 90}}
                orientation={GiphyDirection.Horizontal}
                spanCount={1}
                onMediaSelect={e => {
                  //console.log(e.nativeEvent.media);
                  navigation.navigate('GifView', {
                    id: e.nativeEvent.media,
                  });
                }}
              />
              <Text style={styles.text}>Trending GIFs</Text>

              <GiphyGridView
                content={GiphyContent.trendingGifs()}
                cellPadding={20}
                style={{height: 500}}
                onMediaSelect={e => {
                  //console.log(e.nativeEvent.media);
                  navigation.navigate('GifView', {
                    id: e.nativeEvent.media,
                  });
                }}
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  tinyLogo: {
    width: 80,
    height: 30,
    margin: 10,
  },
  textinput: {
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: colors.white,
    height: 40,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 10,
  },
  arrowIcon: {
    alignSelf: 'center',
  },
  icon1: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
