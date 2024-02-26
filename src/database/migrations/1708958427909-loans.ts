import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Loans1708958427909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "loans",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "book_id",
                        type: "int",
                        
                    },
                    {
                        name: "user_id",
                        type: "int",
                        
                    },
                    {
                        name: "loan_date",
                        type: "timestamp",
                        
                    },
                            
                    {
                        name: "due_date",
                        type: "timestamp",
                       
                    },
                    {
                        name: "return_date",
                        type: "timestamp",
                       
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()"
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
               

            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("book_favorite");
    }
    }
