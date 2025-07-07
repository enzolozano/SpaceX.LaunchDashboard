using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Domain.Interfaces
{
    public interface ISpaceXService
    {
        Task<IEnumerable<Launch>> GetPastLaunchesAsync();
        Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync();
    }
}
