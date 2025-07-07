using Microsoft.AspNetCore.Mvc;
using SpaceX.LaunchDashboard.Application.Services;

namespace SpaceX.LaunchDashboard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LaunchesController : ControllerBase
    {
        private readonly ILaunchService _launchService;

        public LaunchesController(ILaunchService launchService)
        {
            _launchService = launchService;
        }

        [HttpGet("upcoming")]
        public async Task<IActionResult> GetUpcoming()
        {
            var launches = await _launchService.GetUpcomingLaunchesAsync(); ;
            return Ok(launches);
        }

        [HttpGet("past")]
        public async Task<IActionResult> GetPast()
        {
            var launches = await _launchService.GetPastLaunchesAsync(); ;
            return Ok(launches);
        }
    }
}
