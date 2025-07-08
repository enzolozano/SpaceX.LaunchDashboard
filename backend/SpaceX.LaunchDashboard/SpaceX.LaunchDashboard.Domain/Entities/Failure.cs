namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Failure(
        int? Time,
        int? Altitude,
        string? Reason
    );
}
