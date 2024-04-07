import { TabbedTable } from "@/components/DataDisplay/TabbedTable";
import { Box, Paper } from "@mui/material";

export default function Edit() {
    return (
        <main className="flex h-full flex-col items-center justify-between p-6">
            <Box sx={{ width: '100%', height: '100%' }}>
                <Paper sx={{ width: '100%', height: '100%', mb: 2 }}>
                    <div className="flex min-h-full flex-col items-center justify-between p-6">
                        <TabbedTable />
                    </div>
                </Paper>
            </Box>
        </main>
    );
}
