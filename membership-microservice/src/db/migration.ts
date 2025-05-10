import { getSqlPool } from "./sql";

export async function runMigrations() {
  const pool = await getSqlPool();
  await pool.request().query(`
    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Households' AND xtype='U')
    CREATE TABLE Households (
      Id INT IDENTITY(1,1) PRIMARY KEY,
      StreetAddress NVARCHAR(255) NOT NULL,
      City NVARCHAR(100) NOT NULL,
      Province NVARCHAR(10) NOT NULL,
      PostalCode NVARCHAR(10) NOT NULL,
      Country NVARCHAR(50) DEFAULT 'Canada',
      PhoneNumber NVARCHAR(20),
      Email NVARCHAR(255),
      CreatedAt DATETIME DEFAULT GETDATE(),
      UpdatedAt DATETIME DEFAULT GETDATE()
    );
  `);
  console.log("✅ Migration completed: Households table ready");
}
