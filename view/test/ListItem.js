/**
 * Created by lmy2534290808 on 2017/9/11.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text,ScrollView,Platform,ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';
import {Subheader,ListItem} from 'react-native-material-ui'
export default class ListItem_ extends Component {
    render() {
        return (<ScrollView style={{flex:1}}>
            <Subheader text="One line"/>
            <ListItem
                divider
                centerElement="Center element as a text"
            />
            <ListItem
                divider
                centerElement={{
                    primaryText: 'Center element as an object'
                }}
                onPress={() => {
                }}
            />

            <ListItem
                divider
                centerElement="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />

            <ListItem
                divider
                dense
                centerElement="Center element as a text (dense)"
            />
            <Subheader text="One line with icon"/>
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Center element as an object',
                }}
                onPress={() => {
                }}
            />
            <Subheader text="Two lines"/>
            <ListItem
                divider
                dense
                centerElement={{
                    primaryText: 'Center element as an object (dense)',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                }}
            />
            <ListItem
                divider
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Subtext',
                }}
            />
            <Subheader text="Two lines with icon"/>
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Subtext',
                }}
            />
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                }}
                rightElement="info"
                onLeftElementPress={() => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Left element pressed', ToastAndroid.SHORT);
                    }
                }}
                onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
                onRightElementPress={() => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Right element pressed', ToastAndroid.SHORT);
                    }
                }}
            />
            <Subheader text="Three lines"/>
            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                }}
                numberOfLines={3}
            />

            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Center element as an object',
                    secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                    tertiaryText: 'Praesent in ipsum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
                }}
            />

            <ListItem
                divider
                leftElement="person"
                centerElement={{
                    primaryText: 'Ali Connors',
                    secondaryText: 'Brunch this weekend?',
                    tertiaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum.',
                }}
                style={{
                    secondaryText: {color:'red'},
                }}
            />
            <Subheader text="Dynamic"/>
            <ListItem
                divider
                leftElement="person"
                numberOfLines="dynamic"
                centerElement={{
                    primaryText: 'With dynamic second line',
                    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque commodo ultrices diam. Praesent in ipsum',
                }}
                onPress={() => {
                }}
            />
            <Subheader text="Custom"/>
            <ListItem
                divider
                leftElement="person"
                centerElement={<Text>Custom center element</Text>}
            />
        </ScrollView>)
    }
}