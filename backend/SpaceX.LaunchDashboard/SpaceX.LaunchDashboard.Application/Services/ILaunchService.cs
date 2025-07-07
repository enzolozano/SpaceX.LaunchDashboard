using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public interface ILaunchService
    {
        Task<DetailedLaunch> GetById(string id);
        Task<IEnumerable<Launch>> GetPastLaunchesAsync();
        Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync();
    }
}
