// pages/auth/auth.js
var db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        token:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    handleAuth(){
        var that=this
        wx.getUserProfile({
          desc: '用于完善会员信息',
          success:(res)=>{
              that.setData({
                token:res.userInfo
              })
              console.log(that.data.token,res.userInfo)
              wx.setStorageSync('token', res.userInfo)
                db.collection('user').add({
                // data 字段表示需新增的 JSON 数据
                    data: {
                        Img:that.data.token.avatarUrl,
                        nickName:that.data.token.nickName
                    },
                    success: function(res) {
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                      console.log("insert success：",res)
                    }
                  })
          }
        })
        // console.log("111",that.data.token)
        
    }
})