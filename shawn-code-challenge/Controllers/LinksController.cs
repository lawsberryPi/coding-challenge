using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using static ReactReduxIntergration.Model.LinkModel;

namespace ReactReduxIntergration.Controllers
{
    [Route("api/[controller]")]
    public class LinksController : Controller
    {
        // static variables are used for defining constants because their values can be retrieved by
        // invoking the class without creating an instance of it
        private static List<LinkProperty> returnedString = new List<LinkProperty>()
        {new LinkProperty("huskers", 0),
        new LinkProperty("hawkeyes", 2)};

        [HttpGet("[action]")]
        public IEnumerable<LinkProperty> LinksManager(string linkUrl)
        {
            if (linkUrl != null && linkUrl!="undefined")
            {
                var index = returnedString.FindIndex(urlObj => urlObj.LinkUrl == linkUrl);
                if (index != -1) return returnedString;
                LinkProperty newEntry = new LinkProperty(linkUrl, 0);
                returnedString.Add(newEntry);
                System.Console.WriteLine(linkUrl);
            }
            return returnedString;
        }

        [HttpGet("[action]")]
        public IEnumerable<LinkProperty> LinksClickerCounter(string linkUrl)
        {
            System.Console.WriteLine(linkUrl);
            var index = returnedString.FindIndex(urlObj => urlObj.LinkUrl == linkUrl);
            if (index > -1) returnedString[index].Clicks = returnedString[index].Clicks + 1;
            return returnedString;
        }

        [HttpDelete]
        public IEnumerable<LinkProperty> LinksDelete(string linkUrl)
        {
            var removeTarget = returnedString.Find(x => x.LinkUrl == linkUrl);
            returnedString.Remove(removeTarget);
            return returnedString;
        }

        [HttpGet("[action]")]
        public IEnumerable<LinkProperty> LinksUpdate(string urlUpdates)
        {
            LinkEditProperty updateUrl = JsonConvert.DeserializeObject<LinkEditProperty>(urlUpdates);
            if(updateUrl.NewUrl!=null && updateUrl.NewUrl != "")
            {
                var index = returnedString.FindIndex(urlObj => urlObj.LinkUrl == updateUrl.OldUrl);
                if (index > -1) returnedString[index].LinkUrl = updateUrl.NewUrl;
            }
            return returnedString;
        }
    }
}