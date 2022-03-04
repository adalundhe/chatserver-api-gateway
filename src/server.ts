import routes from './routes';
import express from 'express';
import cors from 'cors';


export class APIGateway {
    private _app: express.Application;
    private PORT: string | number;

    constructor() {
        this.PORT = process.env.CHAT_API_GATEWAY ?? 5070;
        this._app = express();
        this._app.use(cors({
            origin: "*",
            methods: ["GET", "PUT", "DELETE", "OPTIONS", "HEAD"]
        }))
        this._app.use('/users', routes.userRoutes);
        this._app.use('/rooms', routes.roomRoutes);
    }

    listen = () => {
        this._app.listen(this.PORT, () => {
            console.log(`Serving API Gateway on port: ${this.PORT}`)
        })
    }

    get app(): express.Application {
        return this._app;
    }
}