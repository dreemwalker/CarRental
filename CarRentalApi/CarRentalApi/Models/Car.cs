using System;
using System.Collections.Generic;

namespace CarRentalApi.Models
{
    public partial class Car
    {
       
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Сlass { get; set; }
        public int Year { get; set; }
        public string RegistrationNumber { get; set; }
        
        
    }
}
