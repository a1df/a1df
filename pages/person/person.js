import CheckAuth from "../../encapsulation/auth"
const util = require('../../utils/util.js');
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
const db=wx.cloud.database()
// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo:null,
        currentday:null,
        year: new Date().getFullYear(),      // 年份
        month: new Date().getMonth() + 1,    // 月份
        day: new Date().getDate(),
        str: MONTHS[new Date().getMonth()],  // 月份字符串
        demo2_days_style: [],
        isDep:false,
        ne:null,
    },
    handledelete(event){
        var that=this
       that.setData({
           isDep:false
       })
    },
    GainData(){//获取数据
        // console.log("yaohuoqushujulo")
        var that=this
        db.collection('team_message').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)
              that.setData({
                            ne: res.data,
                            
                })
            }
          })
    },

    getCurrentMonthOfDate(year,month) {
        var d = new Date(year,month,0);
      
        return d.getDate();
      
    },
    // hah(){
    //     var that=this
    //     var time=new Date()
    //     var year=time.getFullYear()
    //     var month=time.getMonth()+1
    //     var days_count=that.getCurrentMonthOfDate(year,month)
    //         let days_style = new Array;
    //         for (let i = 1; i <= days_count; i++) {
    //         const date = new Date(year, month-1, i); 
    //         if (date.getDay() == 0) {
    //             days_style.push({
    //             month: 'current', day: i, color: '#f488cd'
    //             });  
    //         } else {
    //             days_style.push({
    //             month: 'current', day: i, color: '#a18ada'
    //             });
    //         }
    //         }
    //         days_style.push(
    //         // {month: 'current', day: that.data.day, color: 'oranger', background: 'red'},
    //         {month: 'current', day: 12, color: 'red', background: '#b49eeb'},
    //         {month: 'current', day: 17, color: 'red', background: '#f5a8f0'},
    //         {month: 'current', day :20, color: 'red', background: '#aad4f5'},
    //         {month: 'current', day :25, color: 'red', background: '#84e7d0'},
    //         );
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const today = (new Date()).getTime();
        const days_count = new Date(this.data.year, this.data.month, 0).getDate();
        var currentday=new Date().getDate()
        let demo2_days_style = new Array;
        for (let i = 1; i <= days_count; i++) {
            if (i == currentday) {
                demo2_days_style.push({
                    month: 'current', day: i, color: '#314580', background: '#ffed09'
                });
            } else {
                demo2_days_style.push({
                    month: 'current', day: i, color: 'white'
                });
            }
        }
        this.setData({
            demo2_days_style
        });
    },
    hanldePaiHang(){
        this.setData({
            isDep:true
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var that=this
        var time= new Date()
        console.log(time.getDate())
        this.setData({
            currentday:time.getDate()
        })
        console.log(this.data.day)
        this.GainData()
        db.collection('user').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)
              that.setData({
                            userinfo: res.data,
                            
                })
                    console.log("userinfo",that.data.userinfo)
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // CheckAuth(()=>{
        //     // console.log("个人中心")
        //     this.setData({
        //         userinfo:wx.getStorageSync('token')
        //     })
        //     console.log(this.data.userinfo)
        // })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    // handleChange(evt){
    //     wx.chooseImage({
    //         count: 1,
    //         sizeType: ['original', 'compressed'],
    //         sourceType: ['album', 'camera'],
    //         success : (res) => {
    //           // tempFilePath可以作为img标签的src属性显示图片
    //           const tempFilePaths = res.tempFilePaths
    //           // console.log(tempFilePaths)
      
    //           this.setData({
    //             userInfo:{
    //               ...this.data.userInfo,
    //               avatarUrl:tempFilePaths[0]
    //             }
    //           })
      
    //           wx.setStorageSync('token', {
    //             ...wx.getStorageSync('token'),
    //             avatarUrl:tempFilePaths[0]
    //           })
    //         }
    //       }) 
    // },

})