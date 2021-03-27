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
            try
            {
                newCategoriaLink.DtInclusao = DateTime.Now;
                newCategoriaLink.Ativo = true;

                this.mcLinkTreeContext.Add(newCategoriaLink);
                this.mcLinkTreeContext.SaveChanges();

                return new Result() { Error = false, Message = string.Empty };
            }
            catch (Exception ex)
            {
                return new Result() { Error = true, Message = ex.Message };
            }
        }

        [HttpPut("{id}")]
        public Result Put(int id, CategoriaLink editCategoriaLink)
        {
            try
            {
                var categoriaLink = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == id);
                if (categoriaLink == null)
                {
                    return new Result() { Error = true, Message = "Categoria não encontrada, não é possível atualizar." };
                }

                if (editCategoriaLink.Ativo != null && categoriaLink.Ativo != editCategoriaLink.Ativo)
                {
                    categoriaLink.Ativo = editCategoriaLink.Ativo;
                }

                if (!string.IsNullOrEmpty(editCategoriaLink.Descricao) && categoriaLink.Descricao != editCategoriaLink.Descricao)
                {
                    categoriaLink.Descricao = editCategoriaLink.Descricao;
                }

                categoriaLink.DtAtualizacao = DateTime.Now;

                if (!string.IsNullOrEmpty(editCategoriaLink.Ico) && categoriaLink.Ico != editCategoriaLink.Ico)
                {
                    categoriaLink.Ico = editCategoriaLink.Ico;
                }

                if (editCategoriaLink.Posicao != null && categoriaLink.Posicao != editCategoriaLink.Posicao)
                {
                    categoriaLink.Posicao = editCategoriaLink.Posicao;
                }

                if (!string.IsNullOrEmpty(editCategoriaLink.Nome) && categoriaLink.Nome != editCategoriaLink.Nome)
                {
                    categoriaLink.Nome = editCategoriaLink.Nome;
                }

                this.mcLinkTreeContext.Entry(categoriaLink).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
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
                var categoriaLink = this.mcLinkTreeContext.CategoriaLink.FirstOrDefault(p => p.Id == id);
                if (categoriaLink == null)
                {
                    return new Result() { Error = true, Message = "Categoria não encontrada, não é possível remover." };
                }

                this.mcLinkTreeContext.Entry(categoriaLink).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
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
