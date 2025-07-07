using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public interface ILaunchService
    {        
        Task<Launch> GetLatestLaunchAsync();
        Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync();
    }
}
