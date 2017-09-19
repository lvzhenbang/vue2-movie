## 掌握并熟练运用vue后，我们还需要知道什么

### 起因

最近，公司在招兵买马，吸纳了很多的优秀人才，起初我对这一现象并不重视，自我认为这就是因为公司最近的项目做的不错，
老板要把项目做大做强，因此招一些技术大牛无可厚非，同时说句比较脸皮厚的话自己也不差，尤其是在这个前端这一块儿还是比较有信心的，
但是偶然间和老大的一次谈话引起了我的警惕。我发现事情并不是我原来想象的那样，新招的这些技术大牛基本都是偏向于全栈工程师，
由于公司要做大，要增加一个团队，招一些全栈的技术大牛无可厚非，但是有必要全都是吗？这其中一定有原因，我们公司现在做的项目主要用的就是前后端分离，
一个项目组中有一个美工，一个运维，一个项目负责人，两个前端，3个后台，别的先不说，一个前端写基本的页面，一个前端主要写MVVM的前端，
如果找全栈就团队就可以省去1-2人，对公司来说，既节省人力又节省成本，最重要的是还可以提升开发效率。所以现在前端就面临两个问题，
在未来的求职中将会被压低薪水，被迫转为纯前端或者全栈的风险。本来我还以为是我杞人忧天自己吓自己，所以就开始询问其他做程序猿的朋友和同学，
发现他们的公司也有这个苗头，虽然是苗头，但我还是决定去各个招聘网站看一看发现80%的公司（1-3年工作经验也是）都要求有后端开发的项目经验，虽然要求不高，
要求掌握一门php/java/python等后端语言。所以现在的虽然招的前端开发但其实是准全栈，我估计再过一段时间可能招的会是全栈。

注：以上仅代表个人观点

### 行动

基于上述的大胆想法，我决定好好的补一补后端的相关知识，形成一套自己的前端技术栈。

传统的前端：

html(html5)
css(css3)
js（jquery，zepto.js）
ajax

做前后端分离的前端还需要：

vue.js, rect, angular(至少其中一种)
webpack
node.js
git

增加的技术：

php/java/python等后台语言一种（我选python）
mysql/sql server/mongodb 等数据库语言的一种(我选mongodb)
再选一种服务器语言熟悉了解就行

开发环境（根据个人喜好）

### 个人技术栈

html5,
css3,
js,
vue.js （elemnt-ui, muse-ui）

node.js
webpack
git

epxress（koa）
mongodb

注：因为公司最近在新的磨合，自己有机会接触和跟上这一波的前端开发的趋势，感谢公司，感谢各位同事。

### 项目演示

![项目演示](https://github.com/lvzhenbang/vue2-express/blob/master/static/%E6%BC%94%E7%A4%BA.gif)

### 项目实践

为了防止各位看官的喷，决定不拿公司的项目来说事儿，所以以一个在网上看的项目为原型，自己重写一个（一个自适应的小项目）。

[参考项目地址](https://github.com/Selvin11/vue-express-webpack-gulp/)

这个项目中有一些好的点子，所以我的给作者star一下，正是有这些具备开源精神的前辈我们才能在编程的路上越走越稳，越走越快。

> 但是这个项目个人不喜的一些地方：

1.为什么有了webpack后还要使用gulp？
 个人认为现在webpack已经很强大了，gulp已经可以放一边了
2.写的没有规律
 对于一个有强迫症的人来说，代码
 
> 项目我非常喜欢的地方：

1.express 的合并使用
  因为在vue-cli的开发环境中已经使用了express，所以尝试了使用express+mongodb作为后端的开发组合，真的很棒，在我所看的几个
  项目中的大部分是都是另起一个package.json，这样做的弊端就不言而喻了。
2.服务器端的代理设置
  找了一个可免费使用的代理服务商[jsonbird](https://bird.ioliu.cn/)(前期可以不学着一块快速入手)
  [后期express代理配置学习](http://www.expressjs.com.cn/guide/behind-proxies.html)
 
> 个人改进的地方

1. element-ui不是一个可以进行响应式开发的框架
 个人通过学习如何进行组件的开发，我对我所熟悉的muse-ui和element-ui进行了修改，但还是有一定的问题，要想达到bootstrap兼容、适应的效果，
 就不得根据具体情况进行微调

2. 如何引入express-generator
  
 这个个人很简单各位童鞋可以试一下

3. 改进代码
  
  作为一个代码强迫症的人，如果别人不把代码按快进行书写，我是很难看下去的，
  所以就自己试着写了一下。

### 代码分析

1.拷贝数据

  本示例抓取的是豆瓣的相关数据，只要在其代码的js中找到该api即可，本示例为：
  http://api.douban.com/v2/movie/in_theaters?count=
  由于该api可以直接读取数据不用使用反向代理技术
  另外一点，我们使用第三方的数据一般不会使用每条记录中的所有数据，并且不会使用所有的记录，而是使用若干条记录。
  所以，该实例的中的server/db/data.js有一定的参考价值。

2.既然是要做后端我们就要知道经典的mvc，了解MVVM中的m

  m代表的是模型，它实现的是业务逻辑，
  本示例的一个model文件为server/models/schema/move.js用来创建move的集合（也即我们常见的表）
  并定义每行文档的数据类型（我们常见的数据记录，行）
  
3. 实现该model的操作

 数据的操作即是增删改查
 
    // 查询所有电影
    router.get('/movie', (req, res) => {
        Movie
        .find({})
        .sort({
            update_at: -1
        })
        .then(movies => {
        res.json(movies)
     })
     .catch(err => {
        res.json(err)
     })
    })
    
    // 添加一部电影
    router.post('/movie', (req, res) => {
      //使用Movie model上的create方法储存数据
      Movie.create(req.body, (err, movie) => {
          if (err) {
            res.json(err)
          } else {
            res.json(movie)
          }
        })
    })
    
    // 更新一部电影
    router.put('/movie/:id', (req, res) => {
        Movie.findOneAndUpdate({
        _id: req.params.id
      }, {
        $set: {
          title: req.body.title,
          rating: req.body.rating,
          poster: req.body.poster,
          introduction: req.body.introduction
        }
      }, {
        new: true
      })
      .then(movie => res.json(movie))
      .catch(err => res.json(err))
    })
    
    // 删除一部电影
    router.delete('/movie/:id', (req, res) => {
      Movie.findOneAndRemove({
          _id: req.params.id
        })
        .then(movie => res.send(`${movie.title}删除成功`))
        .catch(err => res.json(err))
    })
  
本文只是我有感而写，这段时间根据公司前段时间的体会和公司同事的帮助，以及自己最近学习体会总结而成。


> 运行项目

```
npm install 安装依赖

npm run dev 打包编译

npm run data  获取数据

npm run server  启动服务

```