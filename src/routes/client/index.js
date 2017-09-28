import Router from 'koa-router'
import user from './user'
import goods from './goods'
import carts from './carts'
import { needLogin } from '../../controllers/client/token'
let router = new Router()

router.use('/user', user.routes())
router.use('/goods', goods.routes())
router.use('/cart', needLogin, carts.routes())

export default router;