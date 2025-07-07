using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SpaceX.LaunchDashboard.Domain.Entities;

namespace SpaceX.LaunchDashboard.Application.Services
{
    public interface ILaunchpadService
    {
        Task<Launchpad> GetById(string id);
    }
}
