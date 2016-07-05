using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Data;
using Laptops.Models;

namespace Laptops.Controllers
{
    public class ValuesController : ApiController
    {
        LaptopContext db = new LaptopContext();

        // GET api/values
        public IEnumerable<Laptop> Get()
        {
            return db.Laptops;
        }

        // GET api/values/5
        public LaptopWithPicture Get(int id)
        {
            Laptop laptop = db.Laptops.Find(id);
            LaptopWithPicture ret = new LaptopWithPicture(laptop);
            ret.PictureList = db.Pictures.Where(f => f.LaptopsId == id).ToList<Picture>();

            return ret;
        }

        // POST api/values
        public Laptop Post([FromBody]Laptop laptop)
        {
            db.Laptops.Add(laptop);
            db.SaveChanges();
            return laptop;          
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Laptop laptop)
        {
            if (id == laptop.Id)
            {
                db.Entry(laptop).State = EntityState.Modified;
                db.SaveChanges();
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            Laptop laptop = db.Laptops.Find(id);
            if (laptop != null)
            {
                db.Laptops.Remove(laptop);
                db.SaveChanges();
            }
        }
    }
}
