using System.Text.Json;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Infrastructure.Services
{
    public class SpaceXService(HttpClient httpClient) : ISpaceXService
    {
        private readonly HttpClient _httpClient = httpClient;

        private readonly string _latestLaunchesEndpoint = "/v3/launches/past";
        private readonly string _upcomingLaunchesEndpoint = "/v3/launches/upcoming";

        public async Task<IEnumerable<Launch>> GetPastLaunchesAsync()
        {
            var response = await _httpClient.GetAsync(_latestLaunchesEndpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var launches = JsonSerializer.Deserialize<List<Launch>>(content, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
            });

            return launches;
        }

        public async Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync()
        {
            var response = await _httpClient.GetAsync(_upcomingLaunchesEndpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var launches = JsonSerializer.Deserialize<List<Launch>>(content, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
            });

            return launches;
        }
    }
}
