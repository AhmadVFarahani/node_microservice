import { FastifyInstance } from "fastify";
import { getSqlPool } from "../db/sql";

export default async function (app: FastifyInstance) {
  app.get("/health", async () => {
    const pool = await getSqlPool();
    const result = await pool
      .request()
      .query("SELECT GETDATE() AS currentTime");

    return {
      status: "OK",
      message: "Membership Microservice running",
      dbTime: result.recordset[0].currentTime,
    };
  });
}
