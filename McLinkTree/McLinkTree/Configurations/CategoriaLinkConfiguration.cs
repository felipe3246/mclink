using McLinkTree.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace McLinkTree.Configurations
{
    public class CategoriaLinkConfiguration : IEntityTypeConfiguration<CategoriaLink>
    {
        public void Configure(EntityTypeBuilder<CategoriaLink> builder)
        {
            builder.HasKey(cl => cl.Id).HasName("PK_CategoriaLink");
            builder.HasIndex(cl => cl.Id).IsUnique().HasName("IDX_UniqueCategoria");

            builder.Property(cl => cl.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired();

            builder.Property(cl => cl.Nome).HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(cl => cl.Ico).HasColumnType("nvarchar(10)").IsRequired(false); ;
            builder.Property(cl => cl.DtInclusao).HasColumnType("datetime").IsRequired(false);
            builder.Property(cl => cl.DtAtualizacao).HasColumnType("datetime").IsRequired(false);

        }
    }
}
