import express, {Request, Response} from 'express';
import {userRoute} from "./modular/user/user.route";
import {initDB} from "./database/db";

const app = express();
app.use(express.json());


initDB()
//language=TEXT
app.use('/api/v1/users', userRoute);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello, World!',
        path: req.path,
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000...');
});
