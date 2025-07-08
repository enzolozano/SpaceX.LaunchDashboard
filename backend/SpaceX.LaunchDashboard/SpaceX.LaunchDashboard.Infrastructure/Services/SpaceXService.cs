using System.Text.Json;
using SpaceX.LaunchDashboard.Domain.DTOs;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Infrastructure.Services;

public class SpaceXService(HttpClient httpClient) : ISpaceXService
{
    private readonly HttpClient _httpClient = httpClient;

    private readonly string _launchByIdEndpoint = "/v4/launches/{0}";
    private readonly string _latestLaunchesEndpoint = "/v4/launches/past";
    private readonly string _upcomingLaunchesEndpoint = "/v4/launches/upcoming";

    private readonly string _launchpadByIdEndpoint = "/v4/launchpads/{0}";

    private readonly string _payloadByIdEndpoint = "/v4/payloads/{0}";

    private readonly string _rocketByIdEndpoint = "/v4/rockets/{0}";

    private readonly JsonSerializerOptions _jsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
    };

    public async Task<DetailedLaunchDto> GetLaunchByIdAsync(string id)
    {
        var endpoint = string.Format(_launchByIdEndpoint, id);
        var response = await _httpClient.GetAsync(endpoint);
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        var launch = JsonSerializer.Deserialize<DetailedLaunchDto>(content, _jsonOptions);

        return launch!;
    }

    public async Task<IEnumerable<Launch>> GetPastLaunchesAsync()
    {
        var response = await _httpClient.GetAsync(_latestLaunchesEndpoint);
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        var launches = JsonSerializer.Deserialize<List<Launch>>(content, _jsonOptions);

        return launches!;
    }

    public async Task<IEnumerable<Launch>> GetUpcomingLaunchesAsync()
    {
        var response = await _httpClient.GetAsync(_upcomingLaunchesEndpoint);
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        var launches = JsonSerializer.Deserialize<List<Launch>>(content, _jsonOptions);

        return launches!;
    }

    public async Task<Launchpad> GetLaunchpadByIdAsync(string id)
    {
        var endpoint = string.Format(_launchpadByIdEndpoint, id);
        var response = await _httpClient.GetAsync(endpoint);
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        var launchpad = JsonSerializer.Deserialize<Launchpad>(content, _jsonOptions);

        return launchpad;
    }

    public async Task<IEnumerable<Payload>> GetPayloadsByIdsAsync(List<string> ids)
    {
        var payloads = ids.Select(async id =>
        {
            var endpoint = string.Format(_payloadByIdEndpoint, id);
            var response = await _httpClient.GetAsync(endpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var payload = JsonSerializer.Deserialize<Payload>(content, _jsonOptions);

            return payload;
        });

        return payloads.Select(payload => payload.GetAwaiter().GetResult());
    }

    public async Task<Rocket> GetRocketByIdAsync(string id)
    {
        var endpoint = string.Format(_rocketByIdEndpoint, id);
        var response = await _httpClient.GetAsync(endpoint);
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        var rocket = JsonSerializer.Deserialize<Rocket>(content, _jsonOptions);

        return rocket;
    }
}
