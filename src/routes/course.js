import Router from 'koa-router';
import { itemInsert,itemUpdate,itemDelete,itemList,itemDetail } from '../controllers/course';
import { verify } from '../controllers/token';
let router = new Router();
router.get('/', itemList)
router.get('/:id',itemDetail)
router.post('/',verify, itemInsert)
router.put('/:id',verify, itemUpdate)
router.delete('/:id',verify, itemDelete)
export default router;
