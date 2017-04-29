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
        {
            this._Context = context;
        }

        private IRaptorContext _Context { get; set; }

        public IEnumerable<StylistLicensee> GetAllStylistLicensees()
        {
            return this._Context.StylistLicensees.ToList();
        }

        public StylistLicensee GetById(int id)
        {
            return this._Context.StylistLicensees.SingleOrDefault(x => x.Id == id);
        }
    }
}
