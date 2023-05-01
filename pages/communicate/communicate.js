// pages/communicate/communicate.js
import CheckAuth from "../../encapsulation/auth"
const db=wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo:null,
        ne:null,
        record:null,
        tel:123,
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
        this.Gain_Data_tel()
        this.Gain_Data()
        setTimeout(() => {
               this.Collection_Data()
        }, 500);
    
       
    },
    handlecommunicating(){
        // console.log("tiaozhuna")
        wx.navigateTo({
            url:`/pages/communicating/communicating`,
          })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        var that=this
        db.collection('user').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                     
              // res.data 是包含以上定义的两条记录的数组
              that.setData({
                userinfo:res.data
              })
        console.log("userinfo:",res.data)
          
            }
          })
    },
    Gain_Data(){
        var that=this
        db.collection('activity').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                     console.log(res.data)
              // res.data 是包含以上定义的两条记录的数组
              that.setData({
                ne:res.data
              })
        
          
            }
          })
    },
    Gain_Data_tel(){
        var that=this
        db.collection('telephone').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                     console.log("res data:",res.data[0].telephone)
              // res.data 是包含以上定义的两条记录的数组
              that.setData({
                tel:res.data[0].telephone
              })
        
          
            }
          })
        //   console.log("tel:",that.data.tel)
    },
    Collection_Data(){
        var that=this
        
        console.log("ne:",that.data.ne)
            if(that.data.ne.length<1){
            db.collection('user').add({
            // data 字段表示需新增的 JSON 数据
            data: {
                nickName:that.data.userinfo.nickName,
                telphone:that.data.tel,
                Kind:that.data.ne[0].choose_Message,
            },
            success: function(res) {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log("insert success：",res)
            }
          })
           
        }
       
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