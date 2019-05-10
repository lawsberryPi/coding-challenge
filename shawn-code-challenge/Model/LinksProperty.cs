using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxIntergration.Model
{
    public class LinkModel
    {
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
        public class LinkEditProperty
        {
            public string OldUrl { get; set; }
            public string NewUrl { get; set; }
        }
    }
}
