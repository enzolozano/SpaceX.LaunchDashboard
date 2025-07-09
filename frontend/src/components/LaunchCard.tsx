import { Link } from 'react-router-dom';
import type React from "react"
import { Calendar, Rocket, ArrowRight, CheckCircle, XCircle, Clock } from "lucide-react"
import { Launch } from '../types/Launch';

interface LaunchProps {
  launch: Launch
}

export const LaunchCard: React.FC<LaunchProps> = ({
  launch
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = () => {
    if (launch.upcoming) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-500">
          <Clock className="w-3 h-3 mr-1" />
          Upcoming
        </span>
      )
    }

    if (launch.success) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-500">
          <CheckCircle className="w-3 h-3 mr-1" />
          Success
        </span>
      )
    }

    if (!launch.success) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-500">
          <XCircle className="w-3 h-3 mr-1" />
          Failed
        </span>
      )
    }
  }

  return (
    <div className="group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 rounded-lg bg-white">
      <div className="p-6 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">{launch.name}</h3>
          </div>
          {launch.patch && launch.patch.small && (
            <img
              src={launch.patch.small || "/placeholder.svg"}
              alt={`${launch.name} patch`}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">{getStatusBadge()}</div>
      </div>

      <div className="px-6 pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(launch.dateUtc)}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Rocket className="w-4 h-4" />
            <span>Rocket ID: {launch.rocket}</span>
          </div>

          <Link to={`/launch/${launch.id}`} className="block">
            <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-300 group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors flex items-center justify-center">
              View Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
