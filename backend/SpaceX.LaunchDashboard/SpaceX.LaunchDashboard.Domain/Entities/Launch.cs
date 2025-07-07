using System.Text.Json.Serialization;

namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public class Launch
    {
        public string Id { get; set; }
        public string Name { get; set; }
        [JsonPropertyName("date_utc")]
        public DateTime DateUtc { get; set; }
        public bool Upcoming { get; set; }
        public string Rocket { get; set; }
        public string Launchpad { get; set; }
        public IEnumerable<Crews> Crew { get; set; }
    }
}
