import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { DetailedLaunchPage } from './pages/DetailedLaunch'
import { UpcomingDashboardPage } from './pages/UpcomingDashboard'
import { PastDashboardPage } from './pages/PastDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launch/:id" element={<DetailedLaunchPage />} />
        <Route path="/upcoming" element={<UpcomingDashboardPage />} />
        <Route path="/past" element={<PastDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}