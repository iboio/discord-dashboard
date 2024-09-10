// src/components/MyBarChart.js
import React, {useEffect} from 'react';
import {Box, Paper} from "@mui/material";
import BarChart from "../Charts/BarChart";
import DoughnutChart from "../Charts/DoughnutChart";
import UserTable from "../Table/UserTable";
import {guildDashboard} from "../../Services/Api";
import ChannelTable from "../Table/ChannelTable";
const ChartSection = ({children, padding}) => (
    <Paper elevation={12} sx={{padding}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {children}
        </Box>
    </Paper>
);

const FlexBoxContainer = ({children, gap, padding, flexDirection = 'row'}) => (
    <Box sx={{display: 'flex', flexDirection, gap, padding, height: '100%'}}>
        {children}
    </Box>
);

export default function MessageDashboard() {
    const [chartData, setChartData] = React.useState(0);
    const [userData,setUserData] = React.useState(0);
    const [userAvatarURL, setUserAvatarURL] = React.useState(0);
    const [channelData, setChannelData] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await guildDashboard('1043928530012086283');
                setChartData(data.chart)
                setUserData(data.users)
                setChannelData(data.channel)
                setUserAvatarURL(data.usersAvatarURL);
            } catch (error) {
                console.error("Data fetching failed:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Yükleme göstergesi
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', margin: '1rem'}}>
            <ChartSection padding="16px">
                <BarChart data={chartData}/>
            </ChartSection>

            <Box sx={{marginTop: '1rem'}}>
                <p>Users</p>
            </Box>

            <FlexBoxContainer gap="1rem" marginTop="1rem">
                <Paper elevation={12} sx={{flex: 3, maxHeight: '600px', padding: '16px', overflow: 'hidden'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%'
                    }}>
                        <UserTable user={userData} avatar={userAvatarURL}/>
                    </Box>
                </Paper>
                <Paper elevation={12} sx={{flex: 2, maxHeight: '600px', padding: '16px', overflow: 'hidden'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%'
                    }}>
                        <DoughnutChart data={userData} title={"user"}/>
                    </Box>
                </Paper>
            </FlexBoxContainer>

            <Box sx={{marginTop: '1rem'}}>
                <p>Channels</p>
            </Box>

            <FlexBoxContainer gap="1rem" marginTop="1rem">
                <Paper elevation={12} sx={{flex: 3, maxHeight: '600px', padding: '16px', overflow: 'hidden'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%'
                    }}>
                        <ChannelTable channel={channelData}/>
                    </Box>
                </Paper>
                <Paper elevation={12} sx={{flex: 2, maxHeight: '600px', padding: '16px', overflow: 'hidden'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%'
                    }}>
                        <DoughnutChart data={channelData} title={"channel"}/>
                    </Box>
                </Paper>
            </FlexBoxContainer>
        </Box>
    );
}
