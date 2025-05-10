// src/types/fastify.d.ts
import "fastify";
import type { ConnectionPool } from "mssql";

declare module "fastify" {
  interface FastifyInstance {
    mssql: ConnectionPool;
  }
}
