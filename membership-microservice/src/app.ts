// src/app.ts
import Fastify from "fastify";
import dotenv from "dotenv";
import healthRoutes from "./routes/health";

dotenv.config();

const app = Fastify({
  logger: true,
});

// ❌ اینو حذف کن: app.register(dbPlugin);
// ✅ فقط routeها را register کن
app.register(healthRoutes);

export default app;
