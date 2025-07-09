namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Crew(
        string Id,
        string? Name,
        string? Agency,
        string? Image,
        string? Wikipedia
    );
}
