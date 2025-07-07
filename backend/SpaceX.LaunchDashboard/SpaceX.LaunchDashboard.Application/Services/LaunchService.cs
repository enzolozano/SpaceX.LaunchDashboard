using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public class LaunchService(ISpaceXService spaceXService) : ILaunchService
    {
        private readonly ISpaceXService _spaceXService = spaceXService;

        public async Task<Launch> GetLatestLaunchAsync() => await _spaceXService.GetLatestLaunchAsync();        

        public async Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync() => await _spaceXService.GetUpcomingLaunchesAsync();        
    }
}
