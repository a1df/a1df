// pages/setoutRecord.js
const db=wx.cloud.database();
const util = require('../../utils/util.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        jump:false,
        ne:[],
        openId:"",
        ifNot:true,
        ifTimeout:"(未超时)",
        time:"",
    },
    IfKong(){
        var that=this
        if(that.data.ne.length==0){
           that.setData({
                jump:false,
            })
            console.log("jump  ne:",that.data.jump ,that.data.ne)
        }else{
            that.setData({
                jump:true,
            })
                console.log("jump  ne:",that.data.jump ,that.data.ne)
            
        }
    },
    GainData(){//获取数据
        // console.log("yaohuoqushujulo")
        var that=this
        db.collection('activity').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
              // res.data 是包含以上定义的两条记录的数组
            //   console.log(res.data)
              that.setData({
                            ne: res.data,
                            time:util.formatTime(new Date())
                })
                // console.log("ne  success:",that.data.ne)
                that.IfKong()
                  

                // that.IfTimeout()
            },
          
          })
      
    },
    //判断是否超时
    // IfTimeout(){
    //     var time=util.formatTime(new Date())
    //     console.log(this.data.ifTimeout,this.data.ne[0].Date,time)
    //     for(var i=0;i<this.data.ne.length;i++){

    //     }
    //    if(this.data.ne.Date<time){
    //        this.setData({
    //             // ifTimeout:"已超时"

    //        })
    //        console.log(this.data.ifTimeout)
    //    }
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.GainData()


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