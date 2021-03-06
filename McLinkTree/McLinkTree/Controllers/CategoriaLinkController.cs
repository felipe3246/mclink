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
    }
}
