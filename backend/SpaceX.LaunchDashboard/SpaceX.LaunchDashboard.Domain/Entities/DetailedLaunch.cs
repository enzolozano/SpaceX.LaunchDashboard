namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record DetailedLaunch(
        string Id,
        Links Links,
        string? Rocket,
        bool? Success,
        IReadOnlyList<Failure> Failures,
        string? Details,
        int? FlightNumber,
        string? Name,
        DateTime DateUtc,
        bool? Upcoming
    );
}
