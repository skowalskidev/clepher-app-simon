'use client'

import { Chip } from "@/components/Actions/Chips";
import { InputButton } from "@/components/Actions/InputButton";
import { Select } from "@/components/Actions/Select";
import SelectChips from "@/components/Actions/SelectChips";
import { Toggle } from "@/components/Actions/Toggle";
import { SvgIcon } from "@/components/Icons/SvgIcon";
import { CardSplit } from "@/components/Layout/CardSplit";
import { Box, Paper } from "@mui/material";
import { useState } from "react";

export default function Edit() {
    const selectChips: Chip[] = [
        { key: 0, label: 'Love', icon: <SvgIcon path="/images/icons/fb-reactions/love.svg" /> },
        { key: 1, label: 'Haha', icon: <SvgIcon path="/images/icons/fb-reactions/haha.svg" /> },
        { key: 2, label: 'Wow', icon: <SvgIcon path="/images/icons/fb-reactions/wow.svg" /> },
        { key: 3, label: 'Sad', icon: <SvgIcon path="/images/icons/fb-reactions/sad.svg" /> },
        { key: 4, label: 'Angry', icon: <SvgIcon path="/images/icons/fb-reactions/angry.svg" /> },
        { key: 5, label: 'Like', icon: <SvgIcon path="/images/icons/fb-reactions/like.svg" /> },
    ];

    const [chips, setChips] = useState<Chip[]>([]);
    const [selectChipData, setSelectChipData] = useState<Chip[]>(selectChips);

    const deleteChip = (key: number) => {
        const deletedChip = chips.find((chip) => chip.key === key);
        if (deletedChip) {
            setChips((prevChips) => prevChips.filter((chip: Chip) => chip.key !== key));
            setSelectChipData((prevChips) => [...prevChips, deletedChip]);
        }
    };

    function selectChip(key: number) {
        const selectedChip = selectChipData.find(chip => chip.key === key);
        if (selectedChip) {
            setChips((prevChips) => [...prevChips, selectedChip]);
            setSelectChipData(prevChips => prevChips.filter(chip => chip.key !== key));
        }
    }

    const leftPages = [
        {
            label: 'Settings',
            content: (
                <>
                    <Toggle label="Enable To Privately Reply To First-Level Comments Only" />
                    <Toggle label="Send Message To The Same User Only Once Per Post" />
                    <SelectChips fill label="Require a Post Reaction" chips={chips} selectChips={selectChipData} deleteChip={deleteChip} selectChip={selectChip} />
                    <InputButton fill buttonLabel="Add" placeholder="Type keyword..." label="Exclude Comments With These Keywords" />
                    <InputButton fill buttonLabel="Add" placeholder="Type keyword..." label="Only Trigger For Comments With These Keywords" />
                    <Select fill label="Message Type" selected="Select" options={['Flow', 'Single Message']} />
                    <Select fill label="Message Type" selected="Select" options={['Flow', 'Single Message']} />
                </>
            ),
        },
        {
            label: 'Auto Resonse',
            content: <Select fill label="Message Type" selected="Select" options={['Flow', 'Single Message']} />,
        },
    ];

    const rightPages = [
        {
            label: 'Select A Post',
            content: <div>Select a Post</div>,
        },
        {
            label: 'Post ID / URL',
            content: <InputButton fill buttonLabel="Fetch" placeholder="Post ID / URL" />,
        },
    ];

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Paper sx={{ width: '100%', height: '100%', mb: 2 }}>
                <CardSplit leftPages={leftPages} rightPages={rightPages} />
            </Paper>
        </Box>
    );
}
