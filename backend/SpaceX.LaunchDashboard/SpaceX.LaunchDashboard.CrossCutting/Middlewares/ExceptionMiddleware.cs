using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Serilog;
using SpaceX.LaunchDashboard.CrossCutting.Helpers;

namespace SpaceX.LaunchDashboard.CrossCutting.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        
        public ExceptionMiddleware(RequestDelegate next) 
        { 
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                Log.Error(ex, "An unexpected error occurred!");
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext httpContext, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError;

            var result = JsonSerializer.Serialize(new
            {
                error = exception.Message.DefaultValue()
            });

            httpContext.Response.ContentType = "application/json";
            httpContext.Response.StatusCode = (int)code;

            return httpContext.Response.WriteAsync(result);
        }
    }
}
