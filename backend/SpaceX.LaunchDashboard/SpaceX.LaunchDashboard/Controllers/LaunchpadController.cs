using Microsoft.AspNetCore.Mvc;
using SpaceX.LaunchDashboard.Application.Services;

namespace SpaceX.LaunchDashboard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LaunchpadController(ILaunchpadService launchpadService) : ControllerBase
    {
        private readonly ILaunchpadService _launchpadService = launchpadService;

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var launchpad = await _launchpadService.GetById(id);
            return Ok(launchpad);
        }
    }
}
