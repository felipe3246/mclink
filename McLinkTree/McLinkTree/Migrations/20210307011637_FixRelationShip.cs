using Microsoft.EntityFrameworkCore.Migrations;

namespace McLinkTree.Migrations
{
    public partial class FixRelationShip : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoriaLinkId",
                table: "Link",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Link_CategoriaLinkId",
                table: "Link",
                column: "CategoriaLinkId");

            migrationBuilder.AddForeignKey(
                name: "FK_Link_CategoriaLink_CategoriaLinkId",
                table: "Link",
                column: "CategoriaLinkId",
                principalTable: "CategoriaLink",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Link_CategoriaLink_CategoriaLinkId",
                table: "Link");

            migrationBuilder.DropIndex(
                name: "IX_Link_CategoriaLinkId",
                table: "Link");

            migrationBuilder.DropColumn(
                name: "CategoriaLinkId",
                table: "Link");
        }
    }
}
