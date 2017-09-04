# react+redux实现井字游戏

##FLUX实现方式及优缺点

### Redux
    
  -优点：
   redux其实就相当于flux+reducer,都是维护一个数据流，但是redux不能在数据层进行修改，只能通过action操作。
   redux去掉了Dispatcher，改用reducer这个纯函数，接受state和action去生成一个新的state去取代原来的
   只有一个store

  -缺点
   项目过大的话 可能造成reducer过大，


### FB官方FLUX
  通过Dispatcher，用户可以注册相应的action，对不同的action对应的回调，向所有store分发action，store去响应相关action
  相对来说比较简单，

### Reflux
  Reflux 相当于是 Flux 的改进版，补全了 Flux 在 Store 上缺少的功能，并去掉了 Dispatcher（实际上并不是去掉，而是和 Store 合并），减少了冗余的代码。



#### 步骤

git clone 

cd project 

npm install 

npm start


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

