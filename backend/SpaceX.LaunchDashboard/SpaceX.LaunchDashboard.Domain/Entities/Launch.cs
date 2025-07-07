namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Launch(
        string Id,
        string? Name,
        DateTime DateUtc,
        string? Rocket,
        bool? Upcoming,
        bool? Success,
        Patch Patch
    );
}
