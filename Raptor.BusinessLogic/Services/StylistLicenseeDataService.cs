﻿using System.Collections.Generic;
using System.Linq;
using Raptor.Models;
using Raptor.Models.Models;

namespace Raptor.BusinessLogic.Services
{
    public interface IStylistLicenseeDataService
    {
        IEnumerable<StylistLicensee> GetAllStylistLicensees();
    }

    public class StylistLicenseeDataService : IStylistLicenseeDataService
    {
        public StylistLicenseeDataService(IRaptorContext context)
        {
            _Context = context;
        }

        public IRaptorContext _Context { get; set; }

        public IEnumerable<StylistLicensee> GetAllStylistLicensees()
        {
            return _Context.StylistLicensees.ToList();
        }
    }
}