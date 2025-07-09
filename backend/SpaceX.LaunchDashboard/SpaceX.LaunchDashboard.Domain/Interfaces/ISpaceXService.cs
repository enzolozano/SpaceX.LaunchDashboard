using SpaceX.LaunchDashboard.Domain.DTOs;
using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Domain.Interfaces
{
    public interface ISpaceXService
    {
        Task<IEnumerable<Crew>> GetCrewsByIdsAsync(List<string> ids);
        Task<DetailedLaunchDto> GetLaunchByIdAsync(string id);
        Task<IEnumerable<Launch>> GetPastLaunchesAsync();
        Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync();
        Task<Launchpad> GetLaunchpadByIdAsync(string id);
        Task<IEnumerable<Payload>> GetPayloadsByIdsAsync(List<string> ids);
        Task<Rocket> GetRocketByIdAsync(string id);
    }
}
