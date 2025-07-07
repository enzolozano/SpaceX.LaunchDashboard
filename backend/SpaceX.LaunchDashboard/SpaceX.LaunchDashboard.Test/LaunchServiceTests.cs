using Moq;
using SpaceX.LaunchDashboard.Application.Services;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Infrastructure.Services;

namespace SpaceX.LaunchDashboard.Test
{
    public class LaunchServiceTests
    {
        [Fact]
        public async Task GetUpcomingLaunchesAsync_ShouldReturnLaunches()
        {
            var mockSpaceXService = new Mock<SpaceXService>();
            mockSpaceXService.Setup(s => s.GetUpcomingLaunchesAsync())
                .ReturnsAsync([new() { FlightNumber = 123, MissionName = "Test Mission" }]);

            var launchService = new LaunchService(mockSpaceXService.Object);

            var result = await launchService.GetUpcomingLaunchesAsync();

            Assert.NotNull(result);
            Assert.Single(result);
        }

        [Fact]
        public async Task GetPastLaunchesAsync_ShouldReturnLaunches()
        {
            var mockSpaceXService = new Mock<SpaceXService>();
            mockSpaceXService.Setup(s => s.GetPastLaunchesAsync())
                .ReturnsAsync([new() { FlightNumber = 123, MissionName = "Test Mission" }]);

            var launchService = new LaunchService(mockSpaceXService.Object);

            var result = await launchService.GetPastLaunchesAsync();

            Assert.NotNull(result);
        }
    }
}
