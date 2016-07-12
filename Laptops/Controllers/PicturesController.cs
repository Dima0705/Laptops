using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Data;
using Laptops.Models;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace Laptops.Controllers
{
    public class PicturesController : ApiController
    {

        // POST api/pictures
        public async Task<IHttpActionResult> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                return BadRequest();
            }
            var provider = new MultipartMemoryStreamProvider();
            // путь к папке на сервере
            string root = System.Web.HttpContext.Current.Server.MapPath("~/app/images/");
            await Request.Content.ReadAsMultipartAsync(provider);
            foreach (var file in provider.Contents)
            {
                var filename = file.Headers.ContentDisposition.Name.Trim('\"');
                //var filename = file.Headers.ContentDisposition.FileName.Trim('\"');
                byte[] fileArray = await file.ReadAsByteArrayAsync();

                using (System.IO.FileStream fs = new System.IO.FileStream(root + filename, System.IO.FileMode.Create))
                {
                    await fs.WriteAsync(fileArray, 0, fileArray.Length);
                }
            }
            return Ok("Фото загружено");
        }
    }
}