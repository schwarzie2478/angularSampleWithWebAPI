using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalROwinIISApplication.DomainModel
{
    public class LogEntry
    {
        public string logger;
        public int timeStamp;
        public string level;
        public string url;
        public string message;
        public string exception;
    }
}