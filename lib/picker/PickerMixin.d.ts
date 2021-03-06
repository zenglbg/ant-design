import React from 'react';
import { PickerProps } from './PickerTypes';
declare type ItemProps = {
    value: any;
};
export default function (ComposedComponent: any): {
    new (props: Readonly<PickerProps>): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: number, itemHeight: any, zscrollTo: any): void;
        computeChildIndex(top: any, itemHeight: any, childrenLength: number): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<PickerProps>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: PickerProps, context?: any): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: number, itemHeight: any, zscrollTo: any): void;
        computeChildIndex(top: any, itemHeight: any, childrenLength: number): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<PickerProps>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    Item: (_props: ItemProps) => null;
    contextType?: React.Context<any> | undefined;
};
export {};
