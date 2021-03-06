import Entity from '../models/category';
import Cake from '../models/cake';


export let itemList = async (ctx)=>{
    console.log(ctx.query)
    let { limit=10, skip=0 } = ctx.query;
    try{
        let arr = await Entity.find().select().limit(parseInt(limit)).skip(parseInt(skip)).exec();
        ctx.body = {
            data: arr
        }
    }catch(err){
        ctx.throw(err)
    }
}

export let itemInsert = async (ctx)=>{
    let obj = {
        name: ''
    }
    obj = Object.assign(obj, ctx.request.body)
    try{
        let result = await Entity.findOne(obj)
        if(result){
            ctx.status = 417;
            ctx.body = {
                msg: '名称重复'
            }
            return false;
        }
        let count = await Entity.count();
        if(count >=4){
            ctx.status = 417;
            ctx.body = {
                msg: '类型不能超过4个'
            }
        }else{
            let data = await new Entity(obj).save()
            ctx.body = {
                data
            }
        }
    }catch(err){
        console.log(err.toJSON())
        ctx.throw(err)
    }
}

export let itemUpdate = async (ctx)=>{
    let obj = ctx.request.body;
    delete obj._id
    try{
        let result = await Entity.update({ _id: ctx.params.id }, { $set: obj});
        if(result.ok){
            ctx.status = 200;
            ctx.body = {
                result
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                result
            }
        }
    }catch(err){
        ctx.throw(err)
    }
}

export let itemDelete = async (ctx)=>{
    try{
        let count = await Cake.find({category:ctx.params.id}).count()
        console.log(count);
        if(count > 0){
            ctx.status = 417
            ctx.body = {
                msg: '该分类下还有商品,不能删除此分类!'
            }
        }else{
            let arr = await Entity.remove({_id: ctx.params.id})
            ctx.status = 200
            ctx.body = {
                data: arr
            }
        }
        
    }catch(err){
        ctx.throw(err)
    }
}