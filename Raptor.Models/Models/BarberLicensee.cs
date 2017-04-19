using System;

namespace Raptor.Models.Models
{
    public class BarberLicensee
    {
        public int Id { get; set; }
        public int LicenseNumber { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public int ZipCode { get; set; }
        public string County { get; set; }
        public int Phone { get; set; }
    }
}
