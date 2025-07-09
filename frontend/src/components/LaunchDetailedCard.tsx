import type React from "react"
import { Calendar, MapPin, Rocket, Users, Package, Youtube, Globe, FileText } from "lucide-react"
import { DetailedLaunch } from "../types/DetailedLaunch"

interface LaunchDetailCardProps {
  launch: DetailedLaunch
}

export const LaunchDetailCard: React.FC<LaunchDetailCardProps> = ({ launch }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Mission Overview
            </h2>
          </div>
          <div className="px-6 pb-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Launch Date</p>
                  <p className="font-medium">{formatDate(launch.dateUtc)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Launch Site</p>
                  <p className="font-medium">{launch.launchpad.fullName}</p>
                  <p className="text-sm text-gray-500">
                    {launch.launchpad.locality}, {launch.launchpad.region}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  launch.success
                    ? "bg-green-50 text-green-600 border border-green-500"
                    : "bg-red-50 text-red-600 border border-red-500"
                }`}
              >
                {launch.success ? "Success" : "Failed"}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-300">
                Flight #{launch.flightNumber}
              </span>
            </div>

            {launch.details && (
              <div>
                <h4 className="font-medium mb-2">Mission Details</h4>
                <p className="text-gray-700 leading-relaxed">{launch.details}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Rocket: {launch.rocket.name}
            </h2>
          </div>
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700">{launch.rocket.name}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium">
                  {launch.rocket.height.meters}m ({launch.rocket.height.feet}ft)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Diameter</p>
                <p className="font-medium">
                  {launch.rocket.diameter.meters}m ({launch.rocket.diameter.feet}ft)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mass</p>
                <p className="font-medium">
                  {formatNumber(launch.rocket.mass.kg)}kg ({formatNumber(launch.rocket.mass.lb)}lb)
                </p>
              </div>
            </div>
          </div>
        </div>

        {launch.payloads && launch.payloads.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 pb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Package className="h-5 w-5" />
                Payloads ({launch.payloads.length})
              </h2>
            </div>
            <div className="px-6 pb-6">
              <div className="space-y-4">
                {launch.payloads.map((payload, index) => (
                  <div key={payload.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{payload.name}</h4>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-300">
                        {payload.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <p>Mass: {payload.massKg ? `${formatNumber(payload.massKg)}kg ${payload.massLbs ? `(${formatNumber(payload.massLbs)}lb)` : ''}` : "N/A"}</p>
                      <p>Orbit: {payload.orbit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {launch.crews && launch.crews.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 pb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Users className="h-5 w-5" />
                Crew ({launch.crews.length})
              </h2>
            </div>
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {launch.crews.map((member) => (
                  <div key={member.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    {member.image && (
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <a
                        href={member.wikipedia}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="font-medium">{member.name}</p>
                      </a>                      
                      <p className="text-sm text-gray-500">{member.agency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold">Quick Stats</h2>
          </div>
          <div className="px-6 pb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Flight Number</span>
              <span className="font-medium">#{launch.flightNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rocket</span>
              <span className="font-medium">{launch.rocket.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payloads</span>
              <span className="font-medium">{launch.payloads.length}</span>
            </div>
            {launch.crews && launch.crews.length > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">Crew</span>
                <span className="font-medium">{launch.crews.length}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 pb-4">
            <h2 className="text-xl font-semibold">Links & Resources</h2>
          </div>
          <div className="px-6 pb-6 space-y-3">
            {launch.links.youtubeLink && (
              <a
                href={launch.links.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Youtube className="mr-2 h-4 w-4" />
                Watch Launch
              </a>
            )}

            {launch.links.article && (
              <a
                href={launch.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FileText className="mr-2 h-4 w-4" />
                Read Article
              </a>
            )}

            {launch.links.wikipedia && (
              <a
                href={launch.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                Wikipedia
              </a>
            )}

          </div>
        </div>

        {launch.links.patch.large && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 pb-4">
              <h2 className="text-xl font-semibold">Mission Patch</h2>
            </div>
            <div className="px-6 pb-6">
              <img
                src={launch.links.patch.large || "/placeholder.svg"}
                alt={`${launch.name} mission patch`}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
