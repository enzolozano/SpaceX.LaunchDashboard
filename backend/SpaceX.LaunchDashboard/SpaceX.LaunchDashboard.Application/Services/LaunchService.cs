using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public class LaunchService : ILaunchService
    {
        private readonly ISpaceXService _spaceXService;

        public LaunchService(ISpaceXService spaceXService)
        {
            _spaceXService = spaceXService;
        }

        public async Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync()
        {
            return await _spaceXService.GetUpcomingLaunchesAsync();
        }
    }
}
