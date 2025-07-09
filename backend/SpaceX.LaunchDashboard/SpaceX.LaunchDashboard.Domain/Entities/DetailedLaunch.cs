namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record DetailedLaunch(
        string Id,
        Links Links,
        Rocket? Rocket,
        bool? Success,
        IReadOnlyList<Failure> Failures,
        string? Details,
        IEnumerable<Crew> Crews,
        int? FlightNumber,
        string? Name,
        DateTime DateUtc,
        bool? Upcoming,
        IEnumerable<Payload> Payloads,
        Launchpad? Launchpad
    );
}
