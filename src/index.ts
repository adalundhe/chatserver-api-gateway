import { APIGateway } from "./server";


const gateway = new APIGateway();
gateway.listen()

const app = gateway.app;

export { app }