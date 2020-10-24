/// <reference types="react" />
import IData from "./IData";
export default interface Props {
    data: IData[];
    style?: any;
    renderItem?: (item: IData) => JSX.Element;
    renderSectionHeader?: (section: any) => JSX.Element;
    onLoadMoreItems?: () => void;
    getItemHeight?: ({ sectionIndex, rowIndex }: {
        sectionIndex: number;
        rowIndex: number;
    }) => number;
    sectionHeaderHeight?: number;
    indexLetterColor?: string;
    indexLetterSize?: number;
    letterIndexWidth?: number;
    letterIndexHeight?: number;
    containerStyle?: any;
}
