import {Router} from "express";
import { createOrder, notification_url} from "../controllers/payment.js";
const router = Router()

router.post('/create_order',createOrder)

// router.get('/success', (request, resp) => console.log(resp) )

// router.get('/pending', (req, resp) => resp.send('Payment pending'))

// router.get('/failure', (req, resp) => resp.send('Payment failure'))

router.post('/notification_url', notification_url)

export default router