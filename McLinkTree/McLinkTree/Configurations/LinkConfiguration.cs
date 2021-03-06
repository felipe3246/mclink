using McLinkTree.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace McLinkTree.Configurations
{
    public class LinkConfiguration : IEntityTypeConfiguration<Link>
    {
        public void Configure(EntityTypeBuilder<Link> builder)
        {
            builder.HasKey(l => l.Id).HasName("PK_Link");
            builder.HasIndex(l => l.Id).IsUnique().HasName("IDX_UniqueLink");

            builder.Property(l => l.Id).HasColumnType("int").UseMySqlIdentityColumn().IsRequired();
            builder.Property(l => l.IdCategoriaLink).HasColumnType("int").IsRequired();

            builder.Property(l => l.Nome).HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(l => l.UrlLink).HasColumnType("nvarchar(500)").IsRequired();
            builder.Property(l => l.DtInclusao).HasColumnType("datetime").IsRequired();
            builder.Property(l => l.DtAtualizacao).HasColumnType("datetime").IsRequired(false);

            builder.HasOne<CategoriaLink>().WithMany().HasPrincipalKey(cl => cl.Id).HasForeignKey(l => l.IdCategoriaLink).OnDelete(DeleteBehavior.NoAction).HasConstraintName("FK_Link_CategoriaLink");
        }
    }
}
