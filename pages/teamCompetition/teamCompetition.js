// pages/teamCompetition/teamCompetition.js
const util = require('../../utils/util.js');
var db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        k:0,
        m:0,
        isDep:false,
        isShow:true,
        kind_message:null,
        kind_message_football:null,
        kind_message_basketball:null,
        kind_message_tennis:null,
        kind_message_volleyball:null,
        kind_message_pingpang:null,
        kind_message_badminton:null,
        team_message:null,
        team_message_football:null,
        team_message_basketball:null,
        team_message_volleyball:null,
        team_message_badminton:null,
        team_message_tennis:null,
        team_message_pingpang:null
    },
    handle_one(){
        var that=this
        var a=0
        for (let i = 0; i < that.data.kind_message.length; i++) {
            if(that.data.kind_message[i].kind=="足球"){
                a=1
            }
            if(a==1){
                 wx.showToast({
                  title: '您已创建团队',
                })

            }
            
        }
        if(a==0){
            wx.navigateTo({
             url:   `/pages/football/football`,
             })
        }
       
    },
    handle_two(){
        var that=this
        var a=0
        for (let i = 0; i < that.data.kind_message.length; i++) {
            if(that.data.kind_message[i].kind=="排球"){
                a=1
            }
            if(a==1){
                 wx.showToast({
                  title: '您已创建团队',
                })
            }
            
        }
        if(a==0){
            wx.navigateTo({
             url:   `/pages/volleyball/volleyball`,
             })
        }
    },
    handle_three(){
        var that=this
        var a=0
        for (let i = 0; i < that.data.kind_message.length; i++) {
            if(that.data.kind_message[i].kind=="篮球"){
                a=1
            }
            if(a==1){
                 wx.showToast({
                  title: '您已创建团队',
                })
                
                
            }
            
        }
        if(a==0){
            wx.navigateTo({
             url:   `/pages/basketball/basketball`,
             })
        }
    },
    handle_four(){
        var that=this
        var a=0
        for (let i = 0; i < that.data.kind_message.length; i++) {
            if(that.data.kind_message[i].kind=="乒乓球"){
                a=1
            }
            if(a==1){
                 wx.showToast({
                  title: '您已创建团队',
                })
                
                
            }
            
        }
        if(a==0){
            wx.navigateTo({
             url:   `/pages/pingpang/pingpang`,
             })
        }
    },
    handle_five(){
        var that=this
        var a=0
        for (let i = 0; i < that.data.kind_message.length; i++) {
            if(that.data.kind_message[i].kind=="羽毛球"){
                a=1
            }
            if(a==1){
                 wx.showToast({
                  title: '您已创建团队',
                })
                
                
            }
            
        }
        if(a==0){
            wx.navigateTo({
             url:   `/pages/badminton/badminton`,
             })
        }
    },
    isDep: function () {
        this.setData({//弹框显示，地图隐藏
          isDep: true,
        })
      },
      isDep_shut(){
        this.setData({//弹框显示，地图隐藏
            isDep: false,
          })
      },
    handle_six(){
        var that=this
        var a=0
        for (let i = 0; i < that.data.kind_message.length; i++) {
            if(that.data.kind_message[i].kind=="网球"){
                a=1
            }
            if(a==1){
                 wx.showToast({
                  title: '您已创建团队',
                })
                
                
            }
            
        }
      if(a==0){
                wx.navigateTo({
                 url:   `/pages/tennis/tennis`,
                 })
            }
    },
    Gain_Data_kind(){
        var that=this
        db.collection('team_kind').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)
              that.setData({
                    kind_message:res.data,
                    k:res.data.length
                })
            }
        })
        db.collection('team_message').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)
              that.setData({
                team_message:res.data,
                m:res.data.length
              })
            }
        })
    },
    Gain_message(){
        var that=this
        
        for (let i = 0; i < that.data.k; i++) {
            if(that.data.kind_message[i].kind=="足球"){
                that.setData({
                    kind_message_football:that.data.kind_message[i]
                })
            }else if(that.data.kind_message[i].kind=="羽毛球"){
                that.setData({
                    kind_message_badminton:that.data.kind_message[i]
                })
            }else if(that.data.kind_message[i].kind=="乒乓球"){
                that.setData({
                    kind_message_pingpang:that.data.kind_message[i]
                })
            }else if(that.data.kind_message[i].kind=="网球"){
                that.setData({
                    kind_message_tennis:that.data.kind_message[i]
                })
            }else if(that.data.kind_message[i].kind=="排球"){
                that.setData({
                    kind_message_volleyball:that.data.kind_message[i]
                })
            }else if(that.data.kind_message[i].kind=="篮球"){
                that.setData({
                    kind_message_basketball:that.data.kind_message[i]
                })
            }
        }
        for (let i = 0; i < that.data.m; i++) {
            if(that.data.team_message[i].kind=="足球"){
                that.setData({
                    team_message_football:that.data.team_message[i]
                })
            }else if(that.data.team_message[i].kind=="羽毛球"){
                that.setData({
                    team_message_badminton:that.data.team_message[i]
                })
            }else if(that.data.team_message[i].kind=="乒乓球"){
                that.setData({
                    team_message_pingpang:that.data.team_message[i]
                })
            }else if(that.data.team_message[i].kind=="网球"){
                that.setData({
                    team_message_tennis:that.data.team_message[i]
                })
            }else if(that.data.team_message[i].kind=="排球"){
                that.setData({
                    team_message_volleyball:that.data.team_message[i]
                })
            }else if(that.data.team_message[i].kind=="篮球"){
                that.setData({
                    team_message_basketball:that.data.team_message[i]
                })
            }
        }
        console.log(this.data.team_message_football)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    ifShow(){
        if(this.data.kind_message.length==0&&this.data.team_message.length==0){
                    this.setData({
                        isShow:false
                    })
                }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.Gain_Data_kind()
        setTimeout(()=>{
            this.Gain_message()
            this.ifShow()
        },1000)
       
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
    onReflesh(){
        this.Gain_Data_kind()
        this.Gain_message()
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.onReflesh()
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