using System.Text.Json;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Infrastructure.Services
{
    public class SpaceXService(HttpClient httpClient) : ISpaceXService
    {
        private readonly HttpClient _httpClient = httpClient;

        private readonly string _latestLaunchesEndpoint = "/v5/launches/latest";
        private readonly string _upcomingLaunchesEndpoint = "/v5/launches/upcoming";

        public async Task<Launch> GetLatestLaunchAsync()
        {
            var response = await _httpClient.GetAsync(_latestLaunchesEndpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var launch = JsonSerializer.Deserialize<Launch>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return launch;
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
