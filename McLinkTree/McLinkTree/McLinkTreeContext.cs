using McLinkTree.Configurations;
using McLinkTree.Models;
using Microsoft.EntityFrameworkCore;

namespace McLinkTree
{
    public class McLinkTreeContext : DbContext
    {
        public DbSet<CategoriaLink> CategoriaLink { get; set; }

        public DbSet<Link> Link { get; set; }

        public McLinkTreeContext(DbContextOptions<McLinkTreeContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CategoriaLinkConfiguration());
            modelBuilder.ApplyConfiguration(new LinkConfiguration());
        }
    }
}
