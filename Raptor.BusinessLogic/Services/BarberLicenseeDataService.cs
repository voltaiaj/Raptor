using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Raptor.Models;
using Raptor.Models.Models;

namespace Raptor.BusinessLogic.Services
{
    public class BarberLicenseeDataService
    {
        public BarberLicenseeDataService(IRaptorContext context)
        {
            this._Context = context;
        }

        public IRaptorContext _Context { get; set; }

        public IEnumerable<BarberLicensee> GetAllBarberLicensees()
        {
            return _Context.BarberLicensees.ToList();
        }
    }
}
