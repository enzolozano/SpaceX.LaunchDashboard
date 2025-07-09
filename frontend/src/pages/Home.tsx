import { Link } from 'react-router-dom';
import { Rocket, Calendar, History, ArrowRight } from "lucide-react"

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Rocket className="h-20 w-20 text-blue-400" />
              <div className="absolute -top-2 -right-2 h-6 w-6 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Space<span className="text-blue-400">X</span> Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the latest SpaceX missions, upcoming launches, and dive deep into the details of humanity's journey
            to the stars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group hover:shadow-2xl transition-all duration-300 border border-slate-700 bg-slate-800/50 backdrop-blur rounded-lg">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Upcoming Launches</h2>
              </div>
              <p className="text-gray-400 text-base">Discover future SpaceX missions and never miss a launch</p>
            </div>
            <div className="px-6 pb-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Next generation rockets
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Satellite deployments
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  ISS missions
                </div>
              </div>
              <Link to="/upcoming">
                <button className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                  View Upcoming Launches
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="group hover:shadow-2xl transition-all duration-300 border border-slate-700 bg-slate-800/50 backdrop-blur rounded-lg">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <History className="h-6 w-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Past Launches</h2>
              </div>
              <p className="text-gray-400 text-base">Explore the history of SpaceX achievements and milestones</p>
            </div>
            <div className="px-6 pb-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Historic first flights
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Successful recoveries
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Mission archives
                </div>
              </div>
              <Link to="/past">
                <button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center">
                  View Past Launches
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
