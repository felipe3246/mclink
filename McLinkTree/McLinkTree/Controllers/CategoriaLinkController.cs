using McLinkTree.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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
            return this.mcLinkTreeContext.CategoriaLink.Include(p => p.Links).ToList();
        }

        [HttpGet("{id}")]
        public CategoriaLink Get(int id)
        {
            var categoriaLink = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == id);
            return categoriaLink;
        }

        [HttpPost]
        public Result Post(CategoriaLink newCategoriaLink)
        {
            newCategoriaLink.DtInclusao = DateTime.Now;
            newCategoriaLink.Ativo = true;

            this.mcLinkTreeContext.Add(newCategoriaLink);
            this.mcLinkTreeContext.SaveChanges();

            return new Result() { Error = false, Message = string.Empty };
        }

        [HttpPut("{id}")]
        public Result Put(int id, CategoriaLink editCategoriaLink)
        {
            var categoriaLink = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == id);
            if (categoriaLink == null)
            {
                return new Result() { Error = true, Message = "Categoria não encontrada, não é possível atualizar." };
            }

            categoriaLink.Ativo = editCategoriaLink.Ativo;
            categoriaLink.Descricao = editCategoriaLink.Descricao;
            categoriaLink.DtInclusao = editCategoriaLink.DtInclusao;
            categoriaLink.DtAtualizacao = DateTime.Now;
            categoriaLink.Ico = editCategoriaLink.Ico;
            categoriaLink.Posicao = editCategoriaLink.Posicao;
            categoriaLink.Nome = editCategoriaLink.Nome;

            this.mcLinkTreeContext.Entry(categoriaLink).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            this.mcLinkTreeContext.SaveChanges();

            return new Result() { Error = false, Message = string.Empty };
        }

        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            var categoriaLink = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == id);
            if (categoriaLink == null)
            {
                return new Result() { Error = true, Message = "Categoria não encontrada, não é possível remover." };
            }

            categoriaLink.Ativo = false;
            this.mcLinkTreeContext.Entry(categoriaLink).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            this.mcLinkTreeContext.SaveChanges();

            return new Result() { Error = false, Message = string.Empty };
        }
    }
}
