using System.Collections.Generic;
using System.Linq;
using Raptor.BusinessLogic.DataAccess;
using Raptor.Models;
using Raptor.Models.Models;

namespace Raptor.BusinessLogic.Services
{
    public interface IStylistLicenseeDataService
    {
        IEnumerable<StylistLicensee> GetAllStylistLicensees();
        StylistLicensee GetById(int id);
    }

    public class StylistLicenseeDataService : DataServiceBase<StylistLicensee>, IStylistLicenseeDataService
    {
        public StylistLicenseeDataService(IRaptorContext context)
            :base(context.StylistLicensees)
        {
        }

        public IEnumerable<StylistLicensee> GetAllStylistLicensees()
        {
            return this.Find(x => x.Id > 0);
        }

        public StylistLicensee GetById(int id)
        {
            return this.SingleOrDefault(x => x.Id == id);
        }
    }
}
