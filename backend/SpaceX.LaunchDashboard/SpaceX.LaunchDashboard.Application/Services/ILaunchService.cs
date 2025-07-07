using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public interface ILaunchService
    {
        Task<IEnumerable<Launch>> GetPastLaunchesAsync();
        Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync();
    }
}
