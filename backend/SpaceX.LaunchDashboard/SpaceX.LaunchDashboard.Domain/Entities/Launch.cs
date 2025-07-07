namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public class Launch
    {
        public int FlightNumber { get; set; }
        public string MissionName { get; set; }
        public DateTime LaunchDateUtc { get; set; }
        public Rocket Rocket { get; set; }
        public LaunchSite LaunchSite { get; set; }
        public Links Links { get; set; }
        public string Details { get; set; }
        public bool Upcoming { get; set; }
        public DateTime LastDateUpdate { get; set; }
    }
}
