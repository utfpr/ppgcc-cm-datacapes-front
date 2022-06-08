import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";
import { v4 as uuidv4 } from "uuid";

type Author = {
  id: string;
  orcid: string;
  lattes_id: string;
  name: string;
  institution: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      author: Model.extend<Partial<Author>>({}),
    },
    factories: {
      author: Factory.extend({
        id(i) {
          return uuidv4();
        },
        orcid(i) {
          return `${i}`;
        },
        lattes_id(i) {
          return `1000000000000${i}`;
        },
        name(i) {
          return faker.name.firstName();
        },
        email(i) {
          return faker.internet.email().toLowerCase();
        },
        institution(i) {
          return faker.company.companyName();
        },
      }),
    },
    seeds(server: { createList: (arg0: string, arg1: number) => void }) {
      server.createList("author", 50);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/authors", function (schema, request) {
        const { page = 1, per_page = 8 } = request.queryParams;

        const total = schema.all("author").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const authors = this.serialize(schema.all("author")).authors.slice(
          pageStart,
          pageEnd
        );
        return new Response(
          200,
          { "x-total-count": String(total) },
          { authors }
        );
      });

      this.get("/authors/:id");
      this.post("/authors");
      this.namespace = "";
      this.passthrough();

    },
  });

  return server;
}
