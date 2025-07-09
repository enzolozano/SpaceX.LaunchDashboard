namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Launchpad(
        string? Id,
        Images Images,
        string? FullName,
        string? Locality,
        string? Region,
        int? LaunchAttempts,
        int? LaunchSuccesses,
        string? Status
    );
}
