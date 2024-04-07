'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Love } from '../Icons/FacebookReactions/Love';
import { Haha } from '../Icons/FacebookReactions/Haha';
import { Wow } from '../Icons/FacebookReactions/Wow';
import { Sad } from '../Icons/FacebookReactions/Sad';
import { Angry } from '../Icons/FacebookReactions/Angry';
import { Like } from '../Icons/FacebookReactions/Like';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function Chips() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Love', icon: <Love /> },
        { key: 1, label: 'Haha', icon: <Haha /> },
        { key: 2, label: 'Wow', icon: <Wow /> },
        { key: 3, label: 'Sad', icon: <Sad /> },
        { key: 4, label: 'Angry', icon: <Angry /> },
        { key: 5, label: 'Like', icon: <Like /> },
    ]);

    const handleDelete = (chipToDelete: any) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <ul className="flex justify-center flex-wrap list-none p-0.5 m-0">
            {chipData.map((data) => {
                return (
                    <ListItem key={data.key}>
                        <Chip
                            icon={<div className='p-2'>{data.icon}</div>}
                            label={data.label}
                            onDelete={handleDelete(data)}
                        />
                    </ListItem>
                );
            })}
        </ul>
    );
}