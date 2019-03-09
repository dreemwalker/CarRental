using System;
using System.Collections.Generic;

namespace CarRentalApi.Models
{
    public partial class Order
    {
        public int Id { get; set; }
       
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Comment { get; set; }

        public int CarId { get; set; }
        public int UserId { get; set; }

        public  Car Car { get; set; }
        public  User User { get; set; }
    }
}
