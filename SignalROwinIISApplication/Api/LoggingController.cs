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
            try
            {
                foreach (LogEntry entry in value)
                {
                    //Common.Logging.LogManager.GetLogger("clientLogger").Debug(entry.message);
                    switch (entry.level)
                    {
                        case "FATAL":
                            Common.Logging.LogManager.GetLogger(entry.logger).Fatal(entry.message, new System.Exception(entry.exception));
                            break;
                        case "ERROR":
                            Common.Logging.LogManager.GetLogger(entry.logger).Error(entry.message, new System.Exception(entry.exception));
                            break;
                        case "WARN":
                            Common.Logging.LogManager.GetLogger(entry.logger).Warn(entry.message, new System.Exception(entry.exception));
                            break;
                        case "INFO":
                            Common.Logging.LogManager.GetLogger(entry.logger).Debug(entry.message, new System.Exception(entry.exception));
                            break;
                        case "DEBUG":
                            Common.Logging.LogManager.GetLogger(entry.logger).Debug(entry.message, new System.Exception(entry.exception));
                            break;
                        case "TRACE":
                            Common.Logging.LogManager.GetLogger(entry.logger).Debug(entry.message, new System.Exception(entry.exception));
                            break;
                        default:
                            Common.Logging.LogManager.GetLogger(entry.logger).Debug(entry.message, new System.Exception(entry.exception));
                            break;
                    }
                }
            }
            catch(Exception ex)
            {
                Common.Logging.LogManager.GetLogger(typeof(LoggingController)).Warn("Something went wrong during client logging", ex);
            }
            finally
            { }
        }

    }
}
