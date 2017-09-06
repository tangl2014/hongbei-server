import mongoose from 'mongoose'
let Schema = mongoose.Schema;
const CakeSchema = new Schema({
   isRemoved: {
       type: Boolean,
       default: false
   },
   cover: String,
   pictures:[],
   name: {
       type: String,
       unique: true,
       required: true
   },
   description: String,
   store: Number,
   price: Number,
   standards:[],
   isPromotion:Boolean,
   promotionUrl: String,
   onSale: Boolean,
   sales: Number,
   category: {
       type: Schema.Types.ObjectId,
       ref: 'Category'
   },
   createAt: {
       type: Date,
       default: Date.now
   }
},{ collection: 'cake' ,timestamps: true});
const cake = mongoose.model('Cake', CakeSchema);

export default cake;