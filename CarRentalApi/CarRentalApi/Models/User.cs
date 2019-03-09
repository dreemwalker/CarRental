using System;
using System.Collections.Generic;

namespace CarRentalApi.Models
{
    public partial class User
    {
        //public User()
        //{
        //    Orders = new HashSet<Order>();
        //}

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime Birth { get; set; }
        public string LicenseNumber { get; set; }

       
    }
}
