using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SignalROwinIISApplication.DomainModel;

namespace SignalROwinIISApplication.Api
{
    public class LoggingController : ApiController
    {
        //// GET: api/Logging
        //public IEnumerable<LogEntry> Get()
        //{
        //    return new LogEntry[] {};
        //}


        // POST: api/Logging
        public void Post([FromBody]string value)
        {
            System.Diagnostics.Debug.WriteLine(value);
        }

        //// POST: api/Logging
        //public void Post([FromBody]LogEntry value)
        //{
        //    System.Diagnostics.Debug.WriteLine(value.message);
        //}

    }
}
