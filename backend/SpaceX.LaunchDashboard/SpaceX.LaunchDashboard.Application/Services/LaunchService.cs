using SpaceX.LaunchDashboard.Application.Mappers;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public class LaunchService(ISpaceXService spaceXService) : ILaunchService
    {
        private readonly ISpaceXService _spaceXService = spaceXService;

        public async Task<DetailedLaunch> GetById(string id) 
        { 
            var dto = await _spaceXService.GetLaunchByIdAsync(id); 
            return await dto.ToEntityAsync(_spaceXService);
        }

        public async Task<IEnumerable<Launch>> GetPastLaunchesAsync() => await _spaceXService.GetPastLaunchesAsync();        

        public async Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync() => await _spaceXService.GetUpcomingLaunchesAsync();        
    }
}
