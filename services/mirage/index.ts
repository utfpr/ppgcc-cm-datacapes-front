import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import faker from 'faker';
import { v4  as uuidv4} from 'uuid'
type User = {
    name: string
    email: string
    created_at: string
}

type Author = {
    id: string;
    orcid: string;
    lattes_id: string;
    name: string;
    institution: string;
}

export function makeServer(){
    const server = createServer({

        serializers: {
            application: ActiveModelSerializer,
        },
        models: {
            user: Model.extend<Partial<User>>({}),
            author: Model.extend<Partial<Author>>({}),
        },
        factories: {
            user: Factory.extend({
                name (i){
                    return `User ${i +1}`
                },
                email (i){
                    return faker.internet.email().toLowerCase();
                },
                createdAt (i){
                    return faker.date.recent(10);
                },
            }),
            author: Factory.extend({
                id(i) {
                    return uuidv4()
                },
                orcid(i){
                    return `${i}`
                },
                lattes_id(i){
                    return `100000000000000${i}`
                },
                name (i){
                    return faker.name.firstName();
                },
                email (i){
                    return faker.internet.email().toLowerCase();
                },
                institution(i) {
                    return faker.company.companyName();
                }
                
            })
        },
        seeds(server){
            server.createList('user', 50);
            server.createList('author',100)
        },
        routes (){
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users', function(schema,request) {
                const { page = 1, per_page = 10 } = request.queryParams;
           
                const total = schema.all('user').length

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const users = this.serialize(schema.all('user'))
                .users
                .sort((a,b) => a.createdAt - b.createdAt)
                .slice(pageStart, pageEnd)

                return new Response(
                    200,
                    {'x-total-count': String(total)},
                    {users}
                )
            });

              this.get('/authors', function(schema,request) {
                const { page = 1, per_page = 10 } = request.queryParams;
           
                const total = schema.all('author').length

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const authors = this.serialize(schema.all('author'))
                .authors
                .slice(pageStart, pageEnd)

                return new Response(
                    200,
                    {'x-total-count': String(total)},
                    {authors}
                )
            });

            

            this.get('/author/:id')
            this.post('/author');
            this.get('/users/:id')
            this.post('/users');
            this.namespace = '';
            this.passthrough();
        }
    })

    return server
}