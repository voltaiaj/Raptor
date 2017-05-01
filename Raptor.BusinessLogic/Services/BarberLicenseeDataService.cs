using System.Collections.Generic;
using Raptor.BusinessLogic.DataAccess;
using Raptor.Models;
using Raptor.Models.Models;

namespace Raptor.BusinessLogic.Services
{
    public interface IBarberLicenseeDataService
    {
        IEnumerable<BarberLicensee> GetAllBarberLicensees();
        BarberLicensee GetById(int id);
    }

    public class BarberLicenseeDataService : DataServiceBase<BarberLicensee>
    {
        public BarberLicenseeDataService(IRaptorContext context)
            : base(context.BarberLicensees)
        {
        }

        public IEnumerable<BarberLicensee> GetAllBarberLicensees()
        {
            return Find(x => x.Id > 0);
        }

        public BarberLicensee GetById(int id)
        {
            return this.SingleOrDefault(x => x.Id == id);
        }
    }
}
