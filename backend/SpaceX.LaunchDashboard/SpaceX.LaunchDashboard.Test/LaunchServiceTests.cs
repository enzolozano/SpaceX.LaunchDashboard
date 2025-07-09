using Moq;
using SpaceX.LaunchDashboard.Application.Services;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Infrastructure.Services;

namespace SpaceX.LaunchDashboard.Test
{
    public class LaunchServiceTests
    {
        [Fact]
        public async Task GetByIdAsync_ShouldReturnDetailedLaunch()
        {
            var mockSpaceXService = new Mock<SpaceXService>();

            var fakeId = "123";

            var fakeDetailedLaunch = new DetailedLaunch(
                Id: fakeId,
                Links: null,
                Rocket: "Falcon 9",
                Success: true,
                Failures: null,
                Details: "",
                FlightNumber: 123,
                Name: "Test Mission",
                DateUtc: DateTime.UtcNow,
                Upcoming: false
            );

            mockSpaceXService.Setup(s => s.GetLaunchByIdAsync(fakeId))
                .ReturnsAsync(fakeDetailedLaunch);

            var launchService = new LaunchService(mockSpaceXService.Object);

            var result = await launchService.GetById(fakeId);

            Assert.NotNull(result);
            Assert.Equal("123", result.Id);
            Assert.Equal("Test Mission", result.Name);
        }

        [Fact]
        public async Task GetUpcomingLaunchesAsync_ShouldReturnLaunches()
        {
            var mockSpaceXService = new Mock<SpaceXService>();

            var fakeLaunch = new Launch(
                Id: "123",
                Name: "Test Mission",
                DateUtc: DateTime.UtcNow,
                Rocket: "Falcon 9",
                Upcoming: true,
                Success: null,
                Patch: null
            );

            mockSpaceXService.Setup(s => s.GetUpcomingLaunchesAsync())
                .ReturnsAsync(new List<Launch> { fakeLaunch });

            var launchService = new LaunchService(mockSpaceXService.Object);

            var result = await launchService.GetUpcomingLaunchesAsync();

            Assert.NotNull(result);
            Assert.Single(result);
            Assert.Equal("123", result.First().Id);
            Assert.Equal("Test Mission", result.First().Name);
        }


        [Fact]
        public async Task GetPastLaunchesAsync_ShouldReturnLaunches()
        {
            var mockSpaceXService = new Mock<SpaceXService>();

            var fakeLaunch = new Launch(
                Id: "123",
                Name: "Test Mission",
                DateUtc: DateTime.UtcNow,
                Rocket: "Falcon 9",
                Upcoming: true,
                Success: null,
                Patch: null
            );

            mockSpaceXService.Setup(s => s.GetPastLaunchesAsync())
                .ReturnsAsync(new List<Launch> { fakeLaunch });

            var launchService = new LaunchService(mockSpaceXService.Object);

            var result = await launchService.GetPastLaunchesAsync();

            Assert.NotNull(result);
            Assert.Single(result);
            Assert.Equal("123", result.First().Id);
            Assert.Equal("Test Mission", result.First().Name);
        }
    }
}
