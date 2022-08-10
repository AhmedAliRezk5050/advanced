using Microsoft.EntityFrameworkCore;
using Advanced.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<DataContext>(opts => {
    opts.UseSqlServer(builder.Configuration["ConnectionStrings:PeopleConnection"]);
    opts.EnableSensitiveDataLogging(true);
});

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

var context = app.Services.CreateScope()
                .ServiceProvider
                .GetRequiredService<DataContext>();

SeedData.SeedDatabase(context);

app.Run();