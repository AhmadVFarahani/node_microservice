import Fastify from "fastify";
import healthRoutes from "./routes/health";
import householdRoutes from "./routes/household.routes";
import { runMigrations } from "./db/migration";
import swaggerPlugin from "./plugins/swagger";

const app = Fastify({
  logger: true,
});

app.register(healthRoutes);
app.register(householdRoutes);
app.register(swaggerPlugin);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

async function start() {
  await runMigrations(); // ✅ run migration before start
  await app.listen({ port: PORT });
  console.log(`🚀 Server running on port ${PORT}`);
}

start();
