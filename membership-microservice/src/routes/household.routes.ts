import { FastifyInstance } from "fastify";
import { createHousehold, getHouseholds } from "../services/household.service";

export default async function (app: FastifyInstance) {
  app.get("/households", async () => {
    return await getHouseholds();
  });

  app.post("/households", async (req, reply) => {
    const id = await createHousehold(req.body as any);
    reply.send({ success: true, householdId: id });
  });
}
