using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Domain.DTOs
{
    public record DetailedLaunchDto(
        string Id,
        Links Links,
        string? Rocket,
        bool? Success,
        IReadOnlyList<Failure> Failures,
        string? Details,
        IReadOnlyList<string> Crew,
        int? FlightNumber,
        string? Name,
        DateTime DateUtc,
        bool? Upcoming,
        IReadOnlyList<string> Capsules,
        IReadOnlyList<string> Payloads,
        string? Launchpad
    );
}
