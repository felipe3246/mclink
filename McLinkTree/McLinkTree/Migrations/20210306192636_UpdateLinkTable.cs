using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace McLinkTree.Migrations
{
    public partial class UpdateLinkTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DtAlteracao",
                table: "Link");

            migrationBuilder.AlterColumn<string>(
                name: "UrlLink",
                table: "Link",
                type: "nvarchar(500)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext CHARACTER SET utf8mb4",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Link",
                type: "nvarchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext CHARACTER SET utf8mb4",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DtInclusao",
                table: "Link",
                type: "datetime",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");

            migrationBuilder.AddColumn<DateTime>(
                name: "DtAtualizacao",
                table: "Link",
                type: "datetime",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IDX_UniqueLink",
                table: "Link",
                column: "Id",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IDX_UniqueLink",
                table: "Link");

            migrationBuilder.DropColumn(
                name: "DtAtualizacao",
                table: "Link");

            migrationBuilder.AlterColumn<string>(
                name: "UrlLink",
                table: "Link",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(500)");

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Link",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DtInclusao",
                table: "Link",
                type: "datetime(6)",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime");

            migrationBuilder.AddColumn<DateTime>(
                name: "DtAlteracao",
                table: "Link",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
