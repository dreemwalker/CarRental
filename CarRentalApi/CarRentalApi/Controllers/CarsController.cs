using CarRentalApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CarRentalApi.Controllers
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        CarRentalContext db;
        public CarsController(CarRentalContext context)
        {
            this.db = context;

        }
        //Show all cars
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return db.Cars.ToList();
        }

       
    }
}
