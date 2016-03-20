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


        //// POST: api/Logging
        //public void Post([FromBody]string value)
        //{
        //    System.Diagnostics.Debug.WriteLine(value);
        //}

        // POST: api/Logging
        public void Post([FromBody]List<LogEntry> value)
        {
            foreach (LogEntry entry in value)
            {
                Common.Logging.LogManager.GetLogger("clientLogger").Debug(entry.message);
            }

        }

    }
}
