import Chips from "@/components/Actions/Chips";
import { InputButton } from "@/components/Actions/InputButton";
import { Select } from "@/components/Actions/Select";
import { Toggle } from "@/components/Actions/Toggle";
import { CardSplit } from "@/components/Layout/CardSplit";
import { Box, Paper } from "@mui/material";

export default function Edit() {
    const leftPages = [
        {
            label: 'Settings',
            content: (
                <>
                    <Toggle label="Enable To Privately Reply To First-Level Comments Only" />
                    <Toggle label="Send Message To The Same User Only Once Per Post" />
                    <Chips />
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
