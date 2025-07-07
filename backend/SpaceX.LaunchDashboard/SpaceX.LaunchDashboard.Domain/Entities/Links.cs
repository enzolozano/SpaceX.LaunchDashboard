namespace SpaceX.LaunchDashboard.Domain.Entities
{
    public record Links(
        Patch Patch,
        Reddit Reddit,
        string? YoutubeId,
        string? Article,
        string? Wikipedia)
    {
        public string YoutubeLink => $"https://youtube.com/watch?v={YoutubeId}";
    };

    public record Patch(
        string? Small, 
        string? Large);
    
    public record Reddit(
        string? Campaign,
        string? Launch,
        string? Media,
        string? Recovery);
}
