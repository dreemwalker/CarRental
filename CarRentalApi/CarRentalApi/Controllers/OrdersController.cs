using CarRentalApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

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
        public IEnumerable<Order> Get()
        {
            return db.Orders.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
