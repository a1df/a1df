    //没有手机号，判断是否有token信息，如果有则引入调整手机绑定
        //没有token信息，我们将引导用户授权页面
function CheckAuth(callback){
    if(wx.getStorageSync('tel')){
        callback()
    }else{
        if(!wx.getStorageSync("token")){
            wx.navigateTo({
              url: '/pages/telform/telform',
            })
        }
          else{
            wx.navigateTo({
              url: '/pages/auth/auth',
            })
        }
    }
}

export default CheckAuth



