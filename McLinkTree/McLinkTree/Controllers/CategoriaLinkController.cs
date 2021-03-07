using McLinkTree.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace McLinkTree.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaLinkController : ControllerBase
    {
        private readonly McLinkTreeContext mcLinkTreeContext;

        public CategoriaLinkController(McLinkTreeContext ctx)
        {
            this.mcLinkTreeContext = ctx;
        }

        [HttpGet]
        public IList<CategoriaLink> Get()
        {
            return this.mcLinkTreeContext.CategoriaLink.ToList();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post(Link newLink)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, Link editLink)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
