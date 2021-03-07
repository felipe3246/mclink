using System;

namespace McLinkTree.Models
{
    public class Link
    {
        public int Id { get; set; }

        public int CategoriaLinkId { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        public string UrlLink { get; set; }

        public DateTime DtInclusao { get; set; }

        public DateTime? DtAtualizacao { get; set; }

        public bool Ativo { get; set; }
    }
}
