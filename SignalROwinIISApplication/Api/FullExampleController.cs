using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SignalROwinIISApplication.Api
{
    public class FullExampleController : ApiController
    {
        // GET: api/FullExample
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/FullExample/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FullExample
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/FullExample/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FullExample/5
        public void Delete(int id)
        {
        }
    }
}
