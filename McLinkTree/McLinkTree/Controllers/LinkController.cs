using McLinkTree.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace McLinkTree.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinkController : ControllerBase
    {
        private readonly McLinkTreeContext mcLinkTreeContext;

        public LinkController(McLinkTreeContext ctx)
        {
            this.mcLinkTreeContext = ctx;
        }

        [HttpGet]
        public IList<Link> Get()
        {
            return this.mcLinkTreeContext.Link.ToList();
        }
    }
}
