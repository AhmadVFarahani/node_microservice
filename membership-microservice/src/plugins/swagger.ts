import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export default fp(async (app: FastifyInstance) => {
  await app.register(swagger, {
    openapi: {
      info: {
        title: "Membership Microservice",
        description: "API documentation for Membership Microservice",
        version: "1.0.0",
      },
      servers: [{ url: "http://localhost:3000", description: "Local Server" }],
    },
  });

  await app.register(swaggerUI, {
    routePrefix: "/docs", // ✅ API UI will be available at http://localhost:3000/docs
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
  });

  console.log("✅ Swagger enabled at /docs");
});
