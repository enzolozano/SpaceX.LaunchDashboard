import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLaunchById } from "../api/launchApi"
import { LaunchDetailCard } from "../components/LaunchDetailedCard"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { DetailedLaunch } from "../types/DetailedLaunch"

export const DetailedLaunchPage = () => {
  const params = useParams()
  const launchId = params.id as string

  const [launch, setLaunch] = useState<DetailedLaunch | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        setLoading(true)
        const launchData = await getLaunchById(launchId)
        setLaunch(launchData)
      } catch (err) {
        setError("Failed to fetch launch details")
        console.error("Error fetching launch:", err)
      } finally {
        setLoading(false)
      }
    }

    if (launchId) {
      fetchLaunch()
    }
  }, [launchId])

  if (loading) {
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="mb-6">
          <div className="h-8 w-48 mb-2 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="h-96 w-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="h-32 w-full bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-32 w-full bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-32 w-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !launch) {
    return (
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Launch Details</h1>
          <p className="text-gray-600 mb-6">{error || "Launch not found"}</p>
          <div className="flex gap-4 justify-center">
            <Link to="/upcoming">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Upcoming
              </button>
            </Link>
            <Link to="/past">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Past
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <Link to={launch.upcoming ? "/upcoming" : "/past"}>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {launch.upcoming ? "Upcoming" : "Past"} Launches
            </button>
          </Link>
          <Link to="/">
            <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              Home
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold">{launch.name}</h1>
          {launch.links.patch.small && (
            <img
              src={launch.links.patch.small || "/placeholder.svg"}
              alt={`${launch.name} mission patch`}
              className="w-16 h-16 rounded-full"
            />
          )}
        </div>
        <p className="text-gray-600">
          Flight #{launch.flightNumber} •{" "}
          {launch.upcoming ? "Upcoming Mission" : launch.success ? "Successful Mission" : "Mission"}
        </p>
      </div>

      <LaunchDetailCard launch={launch} />
    </div>
  )
}
