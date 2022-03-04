import express from 'express';
import bodyParser from 'body-parser';
import { RoomServiceClient } from '../services';
import { Room } from '../types/room';
import { Crypto } from '../services/crypto';

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/get', async (req, res) => {

    const client = new RoomServiceClient();

    const roomName = req.query.name as string;
    const token = req.headers.authorization as string;
    
    await client.getRoom({ 
        roomName,
        token,
        callback: async (room: Room) => {
            await res.status(200).json(room);
        }
     });
});


router.put('/put', async (req, res) => {

    const client = new RoomServiceClient();
    const crypto = new Crypto();
    const room = req.body as Room;

    const encrypted = await crypto.encrypt(room.token)
    room.token = encrypted.content;

    await client.createOrUpdateRoom({
        room,
        callback: async (roomName: string) => {
            await res.status(200).json({
                name: roomName
            });
        }
    })

});


router.delete('/delete', async (req, res) => {
    
    const client = new RoomServiceClient();
    const roomName = req.query.name as string;
    const token = req.headers.authorization as string;

    await client.deleteRoom({
        roomName,
        token,
        callback: async () => {
            await res.status(204);
        }
    });

});

export default router;