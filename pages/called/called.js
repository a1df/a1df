// pages/called/called.js
const util = require('../../utils/util.js');
const db = wx.cloud.database()
// var checkValue = [];//顶部复选框所选状态显示 数组
// var items;//复选弹框数组
var kind;//复选的选项
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items:
        [{
            name:'体育馆内',
            checked:false,
            value:'1'
          },
          {
            name:'三食堂对面',
            checked:false,
            value:'2'
          },
          {
            name:'田径场对面',
            checked:false,
            value:'3'
          },
        ],
        jump:false,
        choose:null,
        currentTime:"",
        date: null,
        time: '12:01',
        isDep:false,
        fpTypeText:'',
        checkValue: [],// 
        kind:null,
        show:null,
        Place:"个人",
        Leave_Message:null,
        array:["个人","团队赛"],
        index:0,
        
    },
    bindPickerForm(e){
        console.log(e)
        var that=this
        var a=e.detail.value
        this.setData({
            Place:that.data.array[a],
            index:a
        })
    },
    isDep: function () {
        this.setData({//弹框显示，地图隐藏
          isDep: true,
          mapHide: true
        })
      },
      cancel: function () {
        this.setData({
          isDep: false,
        })
    },
      confirm(){
        var items=this.data.items
       for (let i = 0, lenI = items.length; i < lenI; ++i) {
               if (items[i].checked == true) {
                     this.setData({
                         kind:items[i].name,
                         isDep: false,
                     })
                       break
               }
        }
        this.handle_three()
        console.log(this.data.kind)
      },
      checkboxChange: function (e) {
        var idx = e.currentTarget.dataset.index;//获取当前点击的下标
        console.log(e)
        var that=this
        var items=that.data.items
         var values = e.detail.value
        //  console.log(that.data.items)
        //  console.log(values)

        for (let i = 0, lenI = items.length; i < lenI; ++i) {
            items[i].checked = false
                if (items[i].name == values) {
                        items[i].checked = true
                        break
                }
         }
         this.setData({
            items
          })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;

        //  that.setData({
        //    items
        //  })
     },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var time=new Date()
        this.setData({
            date:time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate(),
            time:time.getHours()+":"+time.getMinutes()
        })
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
    handle_one(){
        if(this.data.Place=="个人"){
            this.setData({
            choose:"跑步",
            })
        }else{
            wx.showToast({
              title: '形式请选择个人',
            })

        }
        
        console.log(this.data.choose)
    },
    handle_two(){

        this.setData({
            choose:"羽毛球",
                })
        console.log(this.data.choose)
    },
    handle_three(){
        this.setData({
            choose:"篮球",
        })
        
    },
    handle_four(){
        this.setData({
            choose:"乒乓球",
        })
        console.log(this.data.choose)
    },
    handle_five(){
        this.setData({
            choose:"排球",
                })
        console.log(this.data.choose)
    },
    handle_six(){
        this.setData({
            choose:"网球",
        })
        console.log(this.data.choose)
    },
    handle_seven(){
        this.setData({
            choose:"游泳",
        })
        console.log(this.data.choose)
    },
    Gain_Data(){
        var that=this
        db.collection('activity').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                    that.setData({
                         show:res.data
                     })
                   console.log("拿id",that.data.show)
            }
          
          })
    },
    Storge_Data(){
        
        var that=this
         var last=that.data.show.length-1
        console.log("获取到了activity吗",that.data.show[last]._id)
       
        if(that.data.choose=="跑步"){
            db.collection('activity_zero').add({
                        // data 字段表示需新增的 JSON 数据
                        data: {
                            _id:that.data.show[last]._id,
                            Time:that.data.time,
                            Date:that.data.date,
                            // Date_Time:this.data.time.,
                            Place:that.data.Place,
                            Leave_Message:that.data.Leave_Message,
                            choose_Message:that.data.choose,
                            currentTime:that.data.currentTime,
                            kind:that.data.kind,
                            ifFinish:false
                            
                        },
                        success: function(res) {
                        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                        console.log("insert success：",res)
                        }
                    })
        }else if(that.data.choose=="羽毛球"){
        db.collection('activity_one').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                        _id:that.data.show[last]._id,
                        Time:that.data.time,
                        Date:that.data.date,
                        // Date_Time:this.data.time.,
                        Place:that.data.Place,
                        Leave_Message:that.data.Leave_Message,
                        choose_Message:that.data.choose,
                        currentTime:that.data.currentTime,
                        kind:that.data.kind,
                        ifFinish:false
                        
                    },
                    success: function(res) {
                    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                    console.log("insert success：",res)
                    }
                })
        }else if(that.data.kind=="体育馆内"&&that.data.choose=="篮球"){
            db.collection('activity_two').add({
                // data 字段表示需新增的 JSON 数据
                data: {
                    _id:that.data.show[last]._id,
                    Time:that.data.time,
                    Date:that.data.date,
                    // Date_Time:this.data.time.,
                    Place:that.data.Place,
                    Leave_Message:that.data.Leave_Message,
                    choose_Message:that.data.choose,
                    currentTime:that.data.currentTime,
                    kind:that.data.kind,
                    ifFinish:false
                    
                },
                success: function(res) {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                console.log("insert success：",res)
                }
            })
        }else if(that.data.kind=="三食堂对面"&&that.data.choose=="篮球"){
            db.collection('activity_three').add({
                        // data 字段表示需新增的 JSON 数据
                        data: {
                            _id:that.data.show[last]._id,
                            Time:that.data.time,
                            Date:that.data.date,
                            // Date_Time:this.data.time.,
                            Place:that.data.Place,
                            Leave_Message:that.data.Leave_Message,
                            choose_Message:that.data.choose,
                            currentTime:that.data.currentTime,
                            kind:that.data.kind,
                            ifFinish:false
                            
                        },
                        success: function(res) {
                        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                        console.log("insert success：",res)
                        }
                    })
        }else if(this.data.kind=="田径场对面"&&this.data.choose=="篮球"){
                    db.collection('activity_four').add({
                                // data 字段表示需新增的 JSON 数据
                                data: {
                                    _id:that.data.show[last]._id,
                                    Time:that.data.time,
                                    Date:that.data.date,
                                    // Date_Time:this.data.time.,
                                    Place:that.data.Place,
                                    Leave_Message:that.data.Leave_Message,
                                    choose_Message:that.data.choose,
                                    currentTime:that.data.currentTime,
                                    kind:that.data.kind,
                                    ifFinish:false
                                    
                                },
                                success: function(res) {
                                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                                console.log("insert success：",res)
                                }
                            })
        }else if(this.data.choose=="乒乓球"){
            db.collection('activity_five').add({
                        // data 字段表示需新增的 JSON 数据
                        data: {
                            _id:that.data.show[last]._id,
                            Time:that.data.time,
                            Date:that.data.date,
                            // Date_Time:this.data.time.,
                            Place:that.data.Place,
                            Leave_Message:that.data.Leave_Message,
                            choose_Message:that.data.choose,
                            currentTime:that.data.currentTime,
                            kind:that.data.kind,
                            ifFinish:false
                            
                        },
                        success: function(res) {
                        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                        console.log("insert success：",res)
                        }
                    })
        }else if(this.data.choose=="网球"){
            db.collection('activity_six').add({
                        // data 字段表示需新增的 JSON 数据
                        data: {
                            _id:that.data.show[last]._id,
                            Time:that.data.time,
                            Date:that.data.date,
                            // Date_Time:this.data.time.,
                            Place:that.data.Place,
                            Leave_Message:that.data.Leave_Message,
                            choose_Message:that.data.choose,
                            currentTime:that.data.currentTime,
                            kind:that.data.kind,
                            ifFinish:false
                            
                        },
                        success: function(res) {
                        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                        console.log("insert success：",res)
                        }
                    })
        }else if(this.data.choose=="游泳"){
            db.collection('activity_seven').add({
                        // data 字段表示需新增的 JSON 数据
                        data: {
                            _id:that.data.show[last]._id,
                            Time:that.data.time,
                            Date:that.data.date,
                            // Date_Time:this.data.time.,
                            Place:that.data.Place,
                            Leave_Message:that.data.Leave_Message,
                            choose_Message:that.data.choose,
                            currentTime:that.data.currentTime,
                            kind:that.data.kind,
                            ifFinish:false
                            
                        },
                        success: function(res) {
                        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                        console.log("insert success：",res)
                        }
                    })
        }
    },
    btnsub(res){
       var that=this
       var {Leave_Message}=res.detail.value;
       that.setData({
        Leave_Message:Leave_Message
        })
        console.log("btnsub Leave_Message ",this.data.Leave_Message,"choose",this.data.choose)
        if(this.data.Leave_Message!=""&&this.data.Leave_Message!=null&&this.data.choose!=null){
            var TIME = util.formatTime(new Date());
            db.collection('activity').doc('fefbe520640d84af0006d342094d7421').get({
                    success: function(res) {
                    // res.data 包含该记录的数据
                    console.log("query success:",res)
                        jump:true
                        that.onShow()
                    }
                }) 
                that.setData({
                    currentTime:TIME,
                })
                wx.switchTab({
                    url: "../home/home",
                    success: function (e) {
                        let page = getCurrentPages().pop();
                        if (page == undefined || page == null) return;
                        page.onLoad();
                    }
                })
                db.collection('activity').add({
                    // data 字段表示需新增的 JSON 数据
                    data: {
                        Time:this.data.time,
                        Date:this.data.date,
                        // Date_Time:this.data.time.,
                        Place:this.data.Place,
                        Leave_Message:Leave_Message,
                        choose_Message:this.data.choose,
                        currentTime:this.data.currentTime,
                        kind:this.data.kind,
                        ifFinish:false
                    },
                    success: function(res) {
                    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                    console.log("insert success：",res)
                    that.Gain_Data()
                    setTimeout(()=>{
                        that.Storge_Data()
                    },1000)
                    
                    }
                })
           
        }else{
            wx.showToast({
                title: '留言或活动为空',
            })
        }
    },

    // launch(event){ 
    //     var that=this
    //     console.log("launch Leave_Message ",this.data.Leave_Message,"choose",this.data.choose)
    //     if(this.data.Leave_Message!=""&&this.data.Leave_Message!=null&&this.data.choose!=null){
               
            
        
    // },
    bindDateChange(event){
        this.setData({
            date: event.detail.value
          })
    },
    bindTimeChange(event){
        this.setData({
            time: event.detail.value
          })
    },
})