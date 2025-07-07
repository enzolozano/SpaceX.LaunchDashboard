using Microsoft.AspNetCore.Mvc;
using SpaceX.LaunchDashboard.Application.Services;

namespace SpaceX.LaunchDashboard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LaunchesController(ILaunchService launchService) : ControllerBase
    {
        private readonly ILaunchService _launchService = launchService;

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var launch = await _launchService.GetById(id);
            return Ok(launch);
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
