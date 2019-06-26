using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace RainbowColours.Controllers
{
    public class DataController : ApiController
    {
        private ColourPropertiesEntities db = new ColourPropertiesEntities();

        public dynamic Get() => new
        {
            colours = db.Properties.Select(
                    record => new { Key = record.Name, Value = record.Web }
                    ).ToDictionary(colour => colour.Key, colour => colour.Value),

            properties = new
            {
                name = db.Properties.Select(colour => colour.Name).ToList(),
                web = db.Properties.Select(colour => colour.Web).ToList(),
                rgb = db.Properties.Select(colour => colour.RGB).ToList(),
                cmyk = db.Properties.Select(colour => colour.CMYK).ToList(),
                hsl = db.Properties.Select(colour => colour.HSL).ToList()
            }

        };

        public dynamic Get(int index) => db.Properties.ToList().Where((x, i) => i == index).FirstOrDefault();

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
