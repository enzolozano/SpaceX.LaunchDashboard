namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Launchpad(
        string? Id,
        Images Images,
        string? FullName,
        string? Location,
        string? Region,
        int? LaunchAttempts,
        int? LaunchSuccesses,
        string? Status
    );
}
