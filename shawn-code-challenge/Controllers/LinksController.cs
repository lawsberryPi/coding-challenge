using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactReduxIntergration.Controllers
{
    [Route("api/[controller]")]
    public class LinksController : Controller
    {
        // static variables are used for defining constants because their values can be retrieved by
        // invoking the class without creating an instance of it
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        private static List<LinkProperty> returnedString = new List<LinkProperty>()
        {new LinkProperty("huskers", 0),
        new LinkProperty("hawkeyes", 2)};

        [HttpGet("[action]")]
        public IEnumerable<LinkProperty> LinksManager(string linkUrl)
        {
            if(linkUrl != "null"){
                LinkProperty newEntry = new LinkProperty(linkUrl, 0);
                returnedString.Add(newEntry);
                System.Console.WriteLine(linkUrl);
            }
            return returnedString;
        }
        [HttpGet("[action]")]
        public IEnumerable<LinkProperty> LinksClickerCounter(string linkUrl){
            System.Console.WriteLine(linkUrl);
            var index = returnedString.FindIndex(urlObj => urlObj.LinkUrl == linkUrl);
            if (index > -1) returnedString[index].Clicks = returnedString[index].Clicks + 1;
            return returnedString;
        }
        [HttpGet("[action]")]
        public IEnumerable<LinkProperty> LinksDelete(string linkUrl)
        {
            var removeTarget = returnedString.Find(x => x.LinkUrl == linkUrl);
            returnedString.Remove(removeTarget);
            return returnedString; 
        }


        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class LinkProperty
        {
            public string LinkUrl { get; set; }
            public int Clicks { get; set; }
            public LinkProperty(string linkUrl, int clicks)
            {
                LinkUrl = linkUrl;
                Clicks = clicks;
            }
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
