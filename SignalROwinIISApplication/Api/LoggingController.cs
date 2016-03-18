using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SignalROwinIISApplication.Api
{
    public class LoggingController : ApiController
    {
        // GET: api/Logging
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Logging/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Logging
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Logging/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Logging/5
        public void Delete(int id)
        {
        }
    }
}
