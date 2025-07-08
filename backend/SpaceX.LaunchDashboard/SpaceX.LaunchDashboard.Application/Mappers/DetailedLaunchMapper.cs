using SpaceX.LaunchDashboard.Domain.DTOs;
using SpaceX.LaunchDashboard.Domain.Entities;
using SpaceX.LaunchDashboard.Domain.Interfaces;

namespace SpaceX.LaunchDashboard.Application.Mappers
{
    public static class DetailedLaunchMapper
    {
        public static async Task<DetailedLaunch> ToEntityAsync(this DetailedLaunchDto dto, ISpaceXService spaceXService)
        {
            var rocket = !string.IsNullOrEmpty(dto.Rocket) ? await spaceXService.GetRocketByIdAsync(dto.Rocket) : null;
            var payloads = dto.Payloads.Any() ? await spaceXService.GetPayloadsByIdsAsync([.. dto.Payloads]) : null;
            var launchpad = !string.IsNullOrEmpty(dto.Launchpad) ? await spaceXService.GetLaunchpadByIdAsync(dto.Launchpad) : null;

            return new DetailedLaunch(
                Id: dto.Id,
                Links: dto.Links,
                Rocket: rocket,
                Success: dto.Success,
                Failures: dto.Failures,
                Details: dto.Details,
                FlightNumber: dto.FlightNumber,
                Name: dto.Name,
                DateUtc: dto.DateUtc,
                Upcoming: dto.Upcoming,
                Payloads: payloads ?? [],
                Launchpad: launchpad
            );
        }
    }
}
