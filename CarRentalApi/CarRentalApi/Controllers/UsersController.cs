using CarRentalApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CarRentalApi.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        CarRentalContext db;
        public UsersController(CarRentalContext context)
        {
            this.db = context;
           
        }
        // Show all Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.Users.ToList();
          
        }

    }
}
