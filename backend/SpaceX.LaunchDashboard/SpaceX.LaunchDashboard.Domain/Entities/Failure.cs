namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Failure(
        int? Time,
        string? Altitude,
        string? Reason
    );
}
