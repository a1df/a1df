const { formatTime } = require("../../utils/util")

// pages/search/search.js'
const db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
       myself:null,
       message:null,
       qitaren:null
    },
    GetMyselfBasicKnowledge(){
        var that=this
        db.collection('user').doc('cd70601e643a524e00070d483daddbb1').get({
            success: function(res) {   
                    //  console.log(res.data)
              // res.data 包含该记录的数据
              that.setData({
                    myself:res.data
                })
                // console.log("111",that.data.myself)
            }
          })
    },
    GetMyselfMessage(){
        var that=this
        db.collection('chat_record').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                    // console.log("0000",res.data)
                    that.setData({
                         message:res.data
                     })
                console.log("000",that.data.message)
            },
          
          })
    },
    GetOtherMessage(){
        var that=this
        db.collection('chat_user').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                    // console.log("0000",res.data)
                    that.setData({
                         qitaren:res.data
                     })
                console.log("0001",that.data.qitaren)
            },
          
          })
    },
    formSubmit(e){
        var time=new Date()
        var that=this
        console.log(e.detail.value,time.getFullYear()+"/"+(time.getMonth()+1)+"/"+time.getDate()+" "+time.getHours()+":"+time.getMinutes())
        var value=e.detail.value
        db.collection('chat_record').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              userWo_Img:that.data.myself.Img,
              userWo_nickName:that.data.myself.nickName,   
              userWo_Message:value,
              NowTime:time.getFullYear()+"/"+(time.getMonth()+1)+"/"+time.getDate()

            },
            success: function(res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log("insert success：",res)
            }
          })
    },
    faSong(e){
        console.log("点击触发",e)
        this.onReady()

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
          this.GetMyselfBasicKnowledge()
          this.GetMyselfMessage()
          this.GetOtherMessage()
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

    }
})