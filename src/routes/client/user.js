import Router from 'koa-router';
import { onLogin, profile, getAddress, addAddress } from '../../controllers/client/user';
import { generateToken, needLogin } from '../../controllers/client/token'
let router = new Router()
router.get('/', profile)
router.get('/address', needLogin, getAddress)
router.post('/address', needLogin, addAddress)
router.post('/onlogin', onLogin, generateToken)
export default router;