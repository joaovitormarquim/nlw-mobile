import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
    items: string[];
    placeholder: string;
    valueChanged: (item: string) => void;
}

const Dropdown = ({ items, placeholder, valueChanged }: Props) => {

    const serializedItems = items.map(item => {
        return {
            label: item,
            value: item,
            color: 'black'
        };
    });

    serializedItems.unshift({
        label: placeholder,
        value: '0',
        color: '#9EA0A4'
    });

    return (
        <RNPickerSelect
            onValueChange={(value) => valueChanged(value)}
            items={serializedItems}
            placeholder={{}}
        />
    );
};

export default Dropdown;