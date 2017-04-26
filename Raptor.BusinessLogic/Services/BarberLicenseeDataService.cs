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

        private IRaptorContext _Context { get; set; }

        public IEnumerable<BarberLicensee> GetAllBarberLicensees()
        {
            return this._Context.BarberLicensees.ToList();
        }
    }
}
