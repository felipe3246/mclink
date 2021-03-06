using System;

namespace McLinkTree.Models
{
    public class CategoriaLink
    {

        public int Id { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        public string Ico { get; set; }

        public int Posicao { get; set; }

        public DateTime DtInclusao { get; set; }

        public DateTime? DtAtualizacao { get; set; }

        public bool Ativo { get; set; }
    }
}
