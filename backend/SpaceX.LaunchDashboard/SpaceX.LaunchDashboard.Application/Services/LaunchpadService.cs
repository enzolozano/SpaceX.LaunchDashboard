using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public class LaunchpadService(ISpaceXService spaceXService) : ILaunchpadService
    {
        private readonly ISpaceXService _spaceXService = spaceXService;

        public async Task<Launchpad> GetById(string id) => await _spaceXService.GetLaunchpadById(id);
    }
}
