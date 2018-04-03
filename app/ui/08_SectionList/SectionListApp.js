// @flow
import React, { Component } from 'react';
import { StyleSheet, View, SectionList, ToastAndroid } from 'react-native';

import ListSection from './ListSection'
import ListItem from './ListItem'

import type { SectionItem } from './ListSection'
import type { Item } from './ListItem'

type Props = {
};

type State = {
    sectionItems: SectionItem[]
};

export default class SectionListApp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            sectionItems: []
        };

        this.makeSections(30, 3);
    }

    makeSections(sectionCount: number, childCount: number): void {
        let loopCount: number = 0;

        for (let i = 1; i <= sectionCount; i++) {

            let section: SectionItem = {
                title: i + '',
                data: []
            };

            for (let j = 0; j < childCount; j++) {
                let item: Item = {
                    id: loopCount,
                    value: i
                };

                for (let k = 0; k < (j + 1); k++) {
                    item.value *= 10;
                }

                section.data.push(item);
                loopCount++;
            }
            this.state.sectionItems.push(section);
        }
    }

    renderSectionHeader = ({ section }: any) => {
        let sectionMargin;

        if (section.title == '1') {
            sectionMargin = 0;
        } else {
            sectionMargin = 25;
        }
        return (
            <ListSection
                section={section}
                onPress={this.onPressSection(section)}
                sectionMargin={sectionMargin}
            />
        );
    };

    renderItem = ({ item }: any) => {
        return (
            <ListItem
                item={item}
                onPress={this.onPressItem(item)}
            />
        );
    }

    onPressSection = (section: SectionItem) => {
        return () => {
            let msg = 'onPressSection: ' + section.title;
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        }
    }

    onPressItem = (item: Item) => {
        return () => {
            let msg = 'onPressItem: ' + item.value;
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        }
    }

    render() {
        return (
            <SectionList
                style={styles.container}
                sections={this.state.sectionItems}
                renderSectionHeader={this.renderSectionHeader}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index} />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    }
});