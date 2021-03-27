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
            try
            {
                var categoria = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == newLink.CategoriaLinkId);
                if (categoria == null)
                {
                    return new Result() { Error = true, Message = "Categoria inválida." };
                }

                newLink.CategoriaLinkId = int.Parse(categoria.Id.ToString());
                newLink.DtInclusao = DateTime.Now;
                newLink.Ativo = true;

                this.mcLinkTreeContext.Add(newLink);
                this.mcLinkTreeContext.SaveChanges();

                return new Result() { Error = false, Message = string.Empty };
            }
            catch (Exception ex)
            {
                return new Result() { Error = true, Message = ex.Message };
            }

        }

        [HttpPut("{id}")]
        public Result Put(int id, Link editLink)
        {
            try
            {
                var link = this.mcLinkTreeContext.Link.FirstOrDefault(p => p.Id == id);
                if (link == null)
                {
                    return new Result() { Error = true, Message = "Link não encontrado, não é possível atualizar." };
                }

                if (link.Ativo != editLink.Ativo)
                {
                    link.Ativo = editLink.Ativo;
                }

                if (!string.IsNullOrEmpty(editLink.Descricao) && link.Descricao != editLink.Descricao)
                {
                    link.Descricao = editLink.Descricao;
                }

                link.DtAtualizacao = DateTime.Now;
                link.CategoriaLinkId = editLink.CategoriaLinkId;

                if (!string.IsNullOrEmpty(editLink.UrlLink) && link.UrlLink != editLink.UrlLink)
                {
                    link.UrlLink = editLink.UrlLink;
                }

                this.mcLinkTreeContext.Entry(link).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                this.mcLinkTreeContext.SaveChanges();

                return new Result() { Error = false, Message = string.Empty };
            }
            catch (Exception ex)
            {
                return new Result() { Error = true, Message = ex.Message };
            }
        }

        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            try
            {
                var link = this.mcLinkTreeContext.Link.FirstOrDefault(p => p.Id == id);
                if (link == null)
                {
                    return new Result() { Error = true, Message = "Link não encontrado, não é possível remover." };
                }

                this.mcLinkTreeContext.Entry(link).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                this.mcLinkTreeContext.SaveChanges();

                return new Result() { Error = false, Message = string.Empty };
            }
            catch (Exception ex)
            {
                return new Result() { Error = true, Message = ex.Message };
            }
        }
    }
}
