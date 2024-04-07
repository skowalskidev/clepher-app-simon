'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function Chips() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Love' },
        { key: 1, label: 'Haha' },
        { key: 2, label: 'Wow' },
        { key: 3, label: 'Sad' },
        { key: 4, label: 'Angry' },
        { key: 5, label: 'Like' },
    ]);

    const handleDelete = (chipToDelete: any) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <ul className="flex justify-center flex-wrap list-none p-0.5 m-0">
            {chipData.map((data) => {
                let icon;

                return (
                    <ListItem key={data.key}>
                        <Chip
                            icon={icon}
                            label={data.label}
                            onDelete={handleDelete(data)}
                        />
                    </ListItem>
                );
            })}
        </ul>
    );
}