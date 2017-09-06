import Router from 'koa-router';
import admin from './admin';
import cake from './cakes';
import token from './token';
import category from './category';

// import upload from './upload';

let router = new Router();
export default () => {
    // router.use('/upload', upload.routes())
    router.use('/token', token.routes())
    router.use('/admin', admin.routes())
    router.use('/cakes', cake.routes())
    router.use('/category', category.routes())
    router.use(router.allowedMethods())
    return router.routes();
}