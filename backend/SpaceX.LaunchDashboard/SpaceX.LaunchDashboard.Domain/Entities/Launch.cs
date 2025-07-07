namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public class Launch
    {
        public string Id { get; set; }
        public string MissionName { get; set; }
        public DateTime LaunchDateUtc { get; set; }
        public bool Success { get; set; }
        public Rocket Rocket { get; set; }
        public Launchpad Launchpad { get; set; }
    }
}
