import { getSqlPool } from "../db/sql";
import { Household } from "../models/household.model";

export async function createHousehold(data: Household): Promise<number> {
  const pool = await getSqlPool();
  const result = await pool
    .request()
    .input("StreetAddress", data.StreetAddress)
    .input("City", data.City)
    .input("Province", data.Province)
    .input("PostalCode", data.PostalCode)
    .input("Country", data.Country ?? "Canada")
    .input("PhoneNumber", data.PhoneNumber ?? "")
    .input("Email", data.Email ?? "").query(`
      INSERT INTO Households (StreetAddress, City, Province, PostalCode, Country, PhoneNumber, Email)
      VALUES (@StreetAddress, @City, @Province, @PostalCode, @Country, @PhoneNumber, @Email);
      SELECT SCOPE_IDENTITY() AS Id;
    `);

  return result.recordset[0].Id;
}

export async function getHouseholds(): Promise<Household[]> {
  const pool = await getSqlPool();
  const result = await pool.request().query(`SELECT * FROM Households`);
  return result.recordset;
}
