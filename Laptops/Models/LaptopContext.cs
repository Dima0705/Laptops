using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Laptops.Models
{
    public class LaptopContext : DbContext
    {
        public DbSet<Laptop> Laptops { get; set; }

        public DbSet<Picture> Pictures { get; set; }
    }
}