import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ISectionData from "../interfaces/ISectionData";
import styles from "../styles/ListLetterIndexStyle";

interface Props {
  onPressLetter: (sectionIndex: number) => void;
  sectionData: ISectionData[];
  indexLetterColor?: string;
  indexLetterSize?: number;
}

export default class ListLetterIndex extends React.PureComponent<Props> {
  getComputedLabelStyle() {
    const { indexLetterColor, indexLetterSize } = this.props;

    if (indexLetterColor) {
      return {
        color: indexLetterColor,
      };
    }

    if (indexLetterSize) {
      return {
        fontSize: indexLetterSize
      };
    }
  }

  renderLetterItem = ({ item, index }: { item: ISectionData; index: number }) => {
    const computedLabelStyle = this.getComputedLabelStyle();

    return (
      <TouchableOpacity onPress={() => this.props.onPressLetter(index)}>
        <View style={styles.letterIndexItem}>
          <Text style={[styles.letterIndexLabel, computedLabelStyle]}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.letterIndexContainer}>
        <FlatList
          contentContainerStyle={styles.letterIndexList}
          data={this.props.sectionData}
          renderItem={this.renderLetterItem}
          keyExtractor={(i) => i.title}
        />
      </View>
    );
  }
}
