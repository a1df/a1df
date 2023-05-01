// pages/football/football.js
const util = require('../../utils/util.js');
var db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: [1, 2,3, 4,5,6,7,8,9],
        index:0,
        isDep:false,
        isShow:false,
        logo:null,
        imgpath:null,
        Place:null,
        Leave_Message:null,
        kind:null,
        logopath:null
    },
    bindPickerChange: function(e) {
        this.setData({
          index: e.detail.value
        })
      },
    isDep: function () {
        this.setData({//弹框显示，地图隐藏
          isDep: true,
        })
      },
      cancel: function () {
        this.setData({
          isDep: false,
        })
    },
    logo1(){
        this.setData({
            logo:"logo1"
        })
    },
    logo2(){
        this.setData({
            logo:"logo2"
        })
    },
    logo3(){
        this.setData({
            logo:"logo3"
        })
    },
    logo4(){
        this.setData({
            logo:"logo4"
        })
    },
    confirm(e){
        var that=this
        if(that.data.logo=="logo1"){
                that.data.imgpath="../../images/logo1.png"
        }
        if(that.data.logo=="logo2"){
            that.data.imgpath="../../images/logo2.png"
         }
        if(that.data.logo=="logo3"){
                that.data.imgpath="../../images/logo3.png"
        }
        if(that.data.logo=="logo4"){
            that.data.imgpath="../../images/logo4.png"
        }
           
        this.setData({
            isDep:false,
            imgpath:that.data.imgpath,
            isShow:true
        })
      },
      launch(event){
        var that=this
       
    },
    btnsub(res){
        var that=this
        console.log(res)
        if(that.data.logo=="logo1"){
            that.setData({
                logopath:"../../images/logo1.png"
            })
        }
        if(that.data.logo=="logo2"){
            that.setData({
                logopath:"../../images/logo2.png"
            })
        }
        if(that.data.logo=="logo3"){
            that.setData({
                logopath:"../../images/logo3.png"
            })
        }
        if(that.data.logo=="logo4"){
            that.setData({
                logopath:"../../images/logo4.png"
            })
        }
         var {Place,Leave_Message}=res.detail.value;
         that.setData({
             Place:Place,
             Leave_Message:Leave_Message
         })
         if(that.data.Leave_Message!=""&&that.data.Leave_Message!=null
         &&that.data.Place!=""&&that.data.Place!=null&&that.data.logopath!=null){
            var TIME = util.formatTime(new Date());
            db.collection('team_kind').add({
                // data 字段表示需新增的 JSON 数据
                data: {
                    buildTime:TIME,
                    kind:"足球",
                },
                success: function(res) {
                  // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                  console.log("insert success：",res)
                }
              })
              wx.switchTab({
                url: "../teamCompetition/teamCompetition",
                success: function (e) {
                    let page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
            
                }
              })
         db.collection('team_message').add({
             // data 字段表示需新增的 JSON 数据
             data: {
                 number:that.data.index,
                 Place:Place,
                 Leave_Message:Leave_Message,
                 currentTime:that.data.currentTime,
                 logopath:that.data.logopath,
                 kind:"足球",
             },
             success: function(res) {
               // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
               console.log("insert success：",res)
             }
           })
        }else{
            wx.showToast({
              title: '请完善基本信息',
            })
        }
         
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

    }
})