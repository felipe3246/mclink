using Microsoft.EntityFrameworkCore.Migrations;

namespace McLinkTree.Migrations
{
    public partial class AddRelationshipLinkToCategoriaLink : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdCategoriaLink",
                table: "Link",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Link_IdCategoriaLink",
                table: "Link",
                column: "IdCategoriaLink");

            migrationBuilder.AddForeignKey(
                name: "FK_Link_CategoriaLink",
                table: "Link",
                column: "IdCategoriaLink",
                principalTable: "CategoriaLink",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Link_CategoriaLink",
                table: "Link");

            migrationBuilder.DropIndex(
                name: "IX_Link_IdCategoriaLink",
                table: "Link");

            migrationBuilder.DropColumn(
                name: "IdCategoriaLink",
                table: "Link");
        }
    }
}
