using System.Text.Json;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Infrastructure.Services
{
    public class SpaceXService(HttpClient httpClient) : ISpaceXService
    {
        private readonly HttpClient _httpClient = httpClient;

        private readonly string _launchpadByIdEndpoint = "/v4/launchpads/{0}";
        private readonly string _launchByIdEndpoint = "/v4/launches/{0}";
        private readonly string _latestLaunchesEndpoint = "/v4/launches/past";
        private readonly string _upcomingLaunchesEndpoint = "/v4/launches/upcoming";

        public async Task<Launchpad> GetLaunchpadById(string id)
        {
            var endpoint = string.Format(_launchpadByIdEndpoint, id);
            var response = await _httpClient.GetAsync(endpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var launchpad = JsonSerializer.Deserialize<Launchpad>(content, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
            });

            return launchpad;
        }

        public async Task<DetailedLaunch> GetLaunchById(string id)
        {
            var endpoint = string.Format(_launchByIdEndpoint, id);
            var response = await _httpClient.GetAsync(endpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var launch = JsonSerializer.Deserialize<DetailedLaunch>(content, new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
            });

            return launch;
        }

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
