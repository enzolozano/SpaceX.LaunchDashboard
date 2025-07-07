using System.Text.Json;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Infrastructure.Services
{
    public class SpaceXService : ISpaceXService
    {
        private readonly HttpClient _httpClient;

        private readonly string _upcomingLaunchesEndpoint = "/v4/launches/upcoming";

        public SpaceXService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync()
        {
            var response = await _httpClient.GetAsync(_upcomingLaunchesEndpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var launches = JsonSerializer.Deserialize<List<Launch>>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return launches;
        }
    }
}
