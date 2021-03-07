using McLinkTree.Models;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpGet("{id}")]
        public Link Get(int id)
        {
            var link = this.mcLinkTreeContext.Link.FirstOrDefault(p => p.Id == id);
            return link;
        }

        [HttpPost]
        public Result Post(Link newLink)
        {
            var categoria = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == newLink.CategoriaLinkId);
            if (categoria == null)
            {
                return new Result() { Error = true, Message = "Categoria inválida." };
            }

            newLink.DtInclusao = DateTime.Now;
            newLink.Ativo = true;

            this.mcLinkTreeContext.Add(newLink);
            this.mcLinkTreeContext.SaveChanges();

            return new Result() { Error = false, Message = string.Empty };
        }

        [HttpPut("{id}")]
        public Result Put(int id, Link editLink)
        {
            var link = this.mcLinkTreeContext.Link.FirstOrDefault(p => p.Id == id);
            if (link == null)
            {
                return new Result() { Error = true, Message = "Link não encontrado, não é possível atualizar." };
            }

            link.Ativo = editLink.Ativo;
            link.Descricao = editLink.Descricao;
            link.DtInclusao = editLink.DtInclusao;
            link.DtAtualizacao = DateTime.Now;
            link.CategoriaLinkId = editLink.CategoriaLinkId;
            link.UrlLink = editLink.UrlLink;

            this.mcLinkTreeContext.Entry(link).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            this.mcLinkTreeContext.SaveChanges();

            return new Result() { Error = false, Message = string.Empty };
        }

        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            var link = this.mcLinkTreeContext.Link.FirstOrDefault(p => p.Id == id);
            if (link == null)
            {
                return new Result() { Error = true, Message = "Link não encontrado, não é possível remover." };
            }

            link.Ativo = false;
            this.mcLinkTreeContext.Entry(link).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            this.mcLinkTreeContext.SaveChanges();

            return new Result() { Error = false, Message = string.Empty };
        }
    }
}
