using Microsoft.AspNetCore.Authentication.Negotiate;
using TeamUtility.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.RegisterServices();

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddSwaggerGen();
    builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme).AddNegotiate();
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(c =>
    c.WithOrigins(builder.Configuration.GetSection("AllowedOrigin").Value!)
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials());
    app.UseAuthentication();
    app.UseAuthorization();
}

app.UseHttpsRedirection();
app.UseAuthorization();
if (app.Environment.IsDevelopment()) app.MapControllers();
else app.MapControllers().AllowAnonymous();
app.Run();
