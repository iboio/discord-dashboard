import { Route, Routes, Navigate, useParams } from "react-router-dom";
import MessageDashboard from "../Components/Dashboard/MessageDashboard";
import VoiceDashboard from "../Components/Dashboard/VoiceDashboard";

export default function Dashboard() {
    const { id } = useParams();

    return (
        <Routes>
            <Route path="/" element={<Navigate to={`/${id}/dashboard/message`} />} />
            <Route path="/message" element={<MessageDashboard />} />
            <Route path="/voice" element={<VoiceDashboard />} />
        </Routes>
    );
}
