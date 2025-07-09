namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Payload(
        string Id, 
        string? Name,
        string? Type,
        double? MassKg,
        double? MassLbs,
        string? Orbit
    );
}
