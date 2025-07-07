using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Domain.Interfaces
{
    public interface ISpaceXService
    {
        Task<DetailedLaunch> GetById(string id);
        Task<IEnumerable<Launch>> GetPastLaunchesAsync();
        Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync();
    }
}
