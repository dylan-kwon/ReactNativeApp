// @flow
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, SectionList, ToastAndroid } from 'react-native';

import CleaningItem from './CleainngItem';
import CleaningDateItem from './CleaningDateItem';

import type { Cleaning } from './CleainngItem';
import type { CleaningDate } from './CleaningDateItem';

import { fetchCleanings } from '../../util/networking/repository/CleaningRepository';

type Props = {
};

type State = {
    cleaningDates: CleaningDate[],
};

export default class NetworkingApp extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            cleaningDates: []
        };
    }

    componentDidMount() {
        fetchCleanings(1, 0, 1)
            .then((responseJson) => {
            console.log('test = responseJson = ' + responseJson.result_data.cleaning_dates);
                let cleaningDates = responseJson.result_data.cleaning_dates;
                for (let cleaningDate of cleaningDates) {
                    cleaningDate.data = cleaningDate.cleanings;
                }
                this.setState(() => {
                    return {
                        cleaningDates: cleaningDates
                    }
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    keyExtractor = (item: Cleaning, index: number) => {
        return item.id
    }

    onPressItem = (item: Cleaning) => {
        return () => {
            ToastAndroid.show(item.unit.title, ToastAndroid.SHORT);
        }
    }

    renderCleaningDateItem = ({ section }: any) => {
        return (
            <CleaningDateItem
                cleaningDate={section} />
        );
    }

    renderCleaningItem = ({ section, item, index }: any) => {
        let totalIndex = index;
        let sections = this.state.cleaningDates;
        let sectionIndex = sections.indexOf(section);

        for (let i = 0; i < sectionIndex; i++) {
            let section = sections[i];
            totalIndex += section.cleanings.length;
        }

        return (
            <CleaningItem
                index={totalIndex}
                cleaning={item}
                onPressItem={this.onPressItem(item)} />
        );
    }

    render() {
        return (
            <SectionList
                style={styles.container}
                sections={this.state.cleaningDates}
                renderSectionHeader={this.renderCleaningDateItem}
                renderItem={this.renderCleaningItem}
                keyExtractor={this.keyExtractor}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 5
    }
});