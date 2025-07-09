namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Rocket(
        string Id, 
        string? Name,
        string? Description,
        Height Height,
        Diameter Diameter,
        Mass Mass
    );

    public record Height(double? Meters, double? Feet);
    public record Diameter(double? Meters, double? Feet);
    public record Mass(double? Kg, double? Lb);
}
