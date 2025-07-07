namespace SpaceX.LaunchDashboard.CrossCutting.Helpers
{
    public static class StringHelper
    {
        public static string DefaultValue(this string value) =>
            !string.IsNullOrEmpty(value) ? value.Trim() : string.Empty;
    }
}
