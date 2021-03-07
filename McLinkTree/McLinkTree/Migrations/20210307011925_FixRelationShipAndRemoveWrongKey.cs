using Microsoft.EntityFrameworkCore.Migrations;

namespace McLinkTree.Migrations
{
    public partial class FixRelationShipAndRemoveWrongKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Link_CategoriaLink_CategoriaLinkId",
                table: "Link");

            migrationBuilder.DropForeignKey(
                name: "FK_Link_CategoriaLink",
                table: "Link");

            migrationBuilder.DropIndex(
                name: "IX_Link_IdCategoriaLink",
                table: "Link");

            migrationBuilder.DropColumn(
                name: "IdCategoriaLink",
                table: "Link");

            migrationBuilder.AlterColumn<int>(
                name: "CategoriaLinkId",
                table: "Link",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Link_CategoriaLink_CategoriaLinkId",
                table: "Link",
                column: "CategoriaLinkId",
                principalTable: "CategoriaLink",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Link_CategoriaLink_CategoriaLinkId",
                table: "Link");

            migrationBuilder.AlterColumn<int>(
                name: "CategoriaLinkId",
                table: "Link",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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
                name: "FK_Link_CategoriaLink_CategoriaLinkId",
                table: "Link",
                column: "CategoriaLinkId",
                principalTable: "CategoriaLink",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Link_CategoriaLink",
                table: "Link",
                column: "IdCategoriaLink",
                principalTable: "CategoriaLink",
                principalColumn: "Id");
        }
    }
}
