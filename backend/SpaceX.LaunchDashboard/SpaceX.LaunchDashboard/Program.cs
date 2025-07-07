using Serilog;
using SpaceX.LaunchDashboard.Application.Services;
using SpaceX.LaunchDashboard.Domain.Interfaces;
using SpaceX.LaunchDashboard.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .WriteTo.File("logs/log.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog((ctx, lc) => lc
    .ReadFrom.Configuration(ctx.Configuration));

// Add services to the container.
builder.Services.AddScoped<ILaunchService, LaunchService>();
builder.Services.AddScoped<ISpaceXService, SpaceXService>();

builder.Services.AddHttpClient<ISpaceXService, SpaceXService>(client =>
{
    client.BaseAddress = new Uri("https://api.spacexdata.com");
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
