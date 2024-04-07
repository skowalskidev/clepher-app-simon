'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export interface Chip {
    key: number;
    label: string;
    icon: React.ReactNode;
}

interface Props {
    chips: Chip[];
    deleteChip: (key: number) => void;
}

export default function Chips({ chips, deleteChip }: Props) {
    return (
        <ul className="flex justify-start flex-wrap list-none p-0.5 m-0">
            {chips.map((data) => {
                return (
                    <ListItem key={data.key}>
                        <Chip
                            icon={<div className='w-6 h-6'>{data.icon}</div>}
                            label={data.label}
                            onDelete={() => deleteChip(data.key)}
                        />
                    </ListItem>
                );
            })}
        </ul>
    );
}