using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Laptops.Models
{
    public class Picture
    {
        public int Id { get; set; }
        public int LaptopsId { get; set; }
        public string PictureName { get; set; }
    }
}