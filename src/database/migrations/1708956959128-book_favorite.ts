import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class BookFavorite1708956959128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "book_favorite",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                            
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()"
                    },
                    {
                        name: "book_id",
                        type: "int",
                        
                    },
                    {
                        name: "user_id",
                        type: "int",
                        
                    },

                    
                ],

                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ],
                uniques: [
                    new TableUnique({
                       name: "user_book_unique",
                       columnNames: ["user_id", "book_id"],
                    }),
                 ],

            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("book_favorite");
    }
    }

  
