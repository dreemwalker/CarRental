using CarRentalApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace CarRentalApi.Controllers
{
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        CarRentalContext db;
        public OrdersController(CarRentalContext context)
        {
            this.db = context;

        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<object> Get()
        {

            var result = from order in db.Orders
                         join car in db.Cars on order.CarId equals car.Id
                         join user in db.Users on order.UserId equals user.Id
                         select new
                         {
                             order.Id,
                             order.BeginDate,
                             order.EndDate,
                             order.Comment,
                             order.CarId,
                             order.UserId,
                             user.Name,
                             user.Surname,
                             car.Brand,
                             car.Model
                         };
            return result;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]Order order)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(order);
                db.SaveChanges();
                return Ok(order);
            }
            return BadRequest(ModelState);
        }

        // Update by Order by Id
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Order order)
        {
            if (ModelState.IsValid)
            {
                db.Update(order);
                db.SaveChanges();
                return Ok(order);
            }
            return BadRequest(ModelState);
        }

        // DELETE Order by id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Order order = db.Orders.FirstOrDefault(x => x.Id == id);
            if (order != null)
            {
                db.Orders.Remove(order);
                db.SaveChanges();
            }
            return Ok(order);
        }
    }
}
