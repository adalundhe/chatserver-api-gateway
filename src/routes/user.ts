import express from 'express';
import bodyParser from 'body-parser';
import { UserServiceClient } from '../services';
import { User } from '../types/user';


const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/get', async (req, res) => {

    const client = new UserServiceClient();

    const userName = req.query.name as string;
    
    await client.getUser({ 
        userName,
        callback: async (user: User) => {
            await res.status(200).json(user);
        }
     });
});


router.put('/put', async (req, res) => {

    const client = new UserServiceClient();
    const user = req.body as User;

    await client.createOrUpdateUser({
        user,
        callback: async (userName: string) => {
            await res.status(200).json({
                name: userName
            });
        }
    })

});


router.delete('/delete', async (req, res) => {
    
    const client = new UserServiceClient();
    const userName = req.query.name as string;

    await client.deleteUser({
        userName: userName,
        callback: async () => {
            await res.status(204);
        }
    });

});

export default router;