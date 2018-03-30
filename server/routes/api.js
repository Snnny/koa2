const router = require('koa-router')()
const userInfoController = require('../controller/user')


router.post('/login', userInfoController.signIn)

router.get('/list', function (ctx, next) {
  const { page } = ctx.query
  let list =  [
    {
      url: 'http://img0.imgtn.bdimg.com/it/u=4171693271,1659447971&fm=27&gp=0.jpg',
    },
    {
      url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img0.imgtn.bdimg.com/it/u=2756475985,1114761545&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img2.imgtn.bdimg.com/it/u=3639471269,2864188549&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img1.imgtn.bdimg.com/it/u=3661296278,1239992553&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img3.imgtn.bdimg.com/it/u=1371546576,2694186345&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img1.imgtn.bdimg.com/it/u=1355165345,2195500250&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img0.imgtn.bdimg.com/it/u=1110702292,1072275686&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img5.imgtn.bdimg.com/it/u=870736880,1100822295&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img0.imgtn.bdimg.com/it/u=4171693271,1659447971&fm=27&gp=0.jpg',
    },
    {
      url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img0.imgtn.bdimg.com/it/u=2756475985,1114761545&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img2.imgtn.bdimg.com/it/u=3639471269,2864188549&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img1.imgtn.bdimg.com/it/u=3661296278,1239992553&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img3.imgtn.bdimg.com/it/u=1371546576,2694186345&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img1.imgtn.bdimg.com/it/u=1355165345,2195500250&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img0.imgtn.bdimg.com/it/u=1110702292,1072275686&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img5.imgtn.bdimg.com/it/u=870736880,1100822295&fm=27&gp=0.jpg'
    },
    {
      url: 'http://img4.imgtn.bdimg.com/it/u=1011872397,3543254171&fm=27&gp=0.jpg'
    },
  ]
  if(page >= 3) {
    list = []
  }
  ctx.body = list
})

router.post('/add', function (ctx, next) {
  let data = ctx.request.body
  ctx.body = data
})

module.exports = router
