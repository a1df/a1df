// pages/home/home.js
const db=wx.cloud.database();
const util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    //
    data: {
        ifhave:false,
        latitude:2,//纬度
        longitude:2,//经度
        ifshow:false,
        show:[],
        jump:false,
        ne:[],
        openId:"",
        ifNot:true,
        markers: [ //标志点的位置
            //位置0跑步田径场
            {
              id: 0,
              iconPath: "../../images/run.jpg",
              latitude:28.654157 ,
              longitude:115.830513 ,
              width: 28,
              height: 32,
            },
            //位置1羽毛球
            {
              id: 1,
              iconPath: "../../images/badminton.jpg",
              latitude:28.655546,
              longitude: 115.829491,
              width: 28,
              height: 32
            },
            //位置2篮球位置一
            {
              id: 2,
              iconPath: "../../images/basketball.jpg",
              latitude: 28.655418,
              longitude:115.829956,
              width: 28,
              height: 32
            },
             //位置2篮球位置二
            {
                id: 3,
                iconPath: "../../images/basketball.jpg",
                latitude: 28.654778,
                longitude:115.827075,
                width: 28,
                height: 32
              },
                //位置2篮球位置三
                {
                    id: 4,
                    iconPath: "../../images/basketball.jpg",
                    latitude: 28.653211,
                    longitude:115.82906,
                    width: 28,
                    height: 32
                  },
            //位置3乒乓球
            {
              id: 5,
              iconPath: "../../images/pingpang.jpg",
              latitude: 28.655385,
              longitude: 115.828967,
              width: 25,
              height: 30
            },
            //网球
            {
                id: 6,
                iconPath: "../../images/tennis.jpg",
                latitude: 28.654731,
                longitude:115.829214,
                width: 28,
                height: 32
              },
            //游泳
            {
                id: 7,
                iconPath: "../../images/swim.jpg",
                latitude: 28.655719,
                longitude:115.830662,
                width: 28,
                height: 32
              },
            //   {
            //     id: 8,
            //     latitude:28.654157 ,
            //     longitude:115.830513 ,
            //     label:{
            //       borderRadius:8,
            //       borderWidth:4,
            //       borderColor:'#fff',
            //       width:34,
            //       height:38,
            //       anchorX:-18,
            //       anchorY:-36,
            //     },
            //   },
            //   {
            //     id: 9,
            //     latitude:28.655546,
            //     longitude: 115.829491,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
            //   {//id=2
            //     id: 10,
            //     latitude: 28.655418,
            //     longitude:115.829956,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
            //    {//id=3
            //     id: 11,
            //     latitude: 28.654778,
            //     longitude:115.827075,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
            //   {//id=4
            //     id: 12,
            //     latitude: 28.653211,
            //     longitude:115.82906,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
            //   {//id=5
            //     id: 13,
            //     latitude: 28.655385,
            //     longitude: 115.828967,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
            //   {//id=6
            //     id: 14,
            //     latitude: 28.654731,
            //     longitude:115.829214,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
            //   {//id=7
            //     id: 15,
            //     latitude: 28.655719,
            //     longitude:115.830662,
            //     width: 28,
            //     height: 32,
            //     label:{
            //         borderRadius:8,
            //         borderWidth:4,
            //         borderColor:'#fff',
            //         width:34,
            //         height:38,
            //         anchorX:-18,
            //         anchorY:-36,
            //       },
            //   },
          ]
    },
    GainData_in_out(){//获取数据
        console.log("ne:",this.data.ne)
        var that=this
        db.collection('activity_two').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                    // console.log("0000",res.data)
                    that.setData({
                         show:res.data
                     })
                console.log("000",that.data.show)
            },
          
          })
       
    },
    bindtapMap(e){
        console.log("跳转的是啥",e.detail.markerId)
        if(e.detail.markerId==0){
            wx.navigateTo({
            url:`/pages/Activity_0/Activity_0`,
          })
        }
        if(e.detail.markerId==1){
            wx.navigateTo({
            url:`/pages/Activity_1/Activity_1`,
          })
        }
        if(e.detail.markerId==2){
            wx.navigateTo({
            url:`/pages/Activity_2/Activity_2`,
          })
        }
        if(e.detail.markerId==3){
            wx.navigateTo({
            url:`/pages/Activity_3/Activity_3`,
          })
        }
        if(e.detail.markerId==4){
            wx.navigateTo({
            url:`/pages/Activity_4/Activity_4`,
          })
        }
        if(e.detail.markerId==5){
            wx.navigateTo({
            url:`/pages/Activity_5/Activity_5`,
          })
        }
        if(e.detail.markerId==6){
            wx.navigateTo({
            url:`/pages/Activity_6/Activity_6`,
          })
        }
        if(e.detail.markerId==7){
            wx.navigateTo({
            url:`/pages/Activity_7/Activity_7`,
          })
        }

        
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
                            
                })
                var last = res.data.length-1
            if(res.data[last].kind!=null){
                    that.setData({
                        ifhave:true
                    })
                }
            var TIME = new Date()
            var a
            var last=res.data.length-1
            var time1=res.data[last].Date
            var time2=res.data[last].Time
            var year=TIME.getFullYear()
            var month=TIME.getMonth()+1
            var day=TIME.getDate()
            var hour=TIME.getHours()
            var minutes=TIME.getMinutes()
            var s1=time1[0]+time1[1]+time1[2]+time1[3]//年
            var x=0,y=0
            var s2,s3,s4,s5
            for (let i = 0; i < time1.length; i++) {
                if(time1[i]=="-"&&x==0){
                    x=i
                }else if(time1[i]=="-"){
                    y=i
                }    
            }
            // console.log("月份有几位",y-x)
            if((y-x)==2){
                  s2=time1[5]//月
            }else if((y-x)==3){
                s2=time1[5]+time1[6]
            }
            // console.log("今年月份是：",s2)
            
            if((y-x)==2&&time1.length==8){
                s3=time1[7]
             }else if((y-x)==2&&time1.length==9){
                s3=time1[7]+time1[8]//日
            }else if((y-x)==3&&time1.length==9){
                s3=time1[8]
            }else if((y-x)==3&&time1.length==10){
                s3=time1[8]+time1[9]
            }
             console.log("天数是：",s3)
            var j=0
            for (let i = 0; i < time2.length; i++) {
               if(time2[i]==":"){
                   j=i
               }
            }
            if(time2.length==3){
                 s4=time2[0]
                 s5=time2[2]
            }else if(time2.length==5){
                s4=time2[0]+time2[1]
                s5=time2[3]+time2[4]
            }else if(time2.length==4&&j==1){
                s4=time2[0]
                s5=time2[2]+time2[3]
            }else if(time2.length==4&&j==2){
                s4=time2[0]+time2[1]
                s5=time2[3]
            }
            console.log(time1,time2,s1,s2,s3,s4,s5)
                if((year-s1)>0){//是否过期
                    a=true//过期了
                }else if((year-s1)==0){
            
                if((month-s2)>0){
                    a=true
                }else if((month-s2)==0){
                        if((day-s3)>0){
                            a=true
                        }else if((day-s3)==0){
                            if((hour-s4)>0){
                                a=true
                            }else if((hour-s4)==0){
                                if((minutes-s5)>0){
                                    a=true
                                }else if((minutes-s5)==0){
                                    a=true
                                }else{
                                    a=false
                                }
                            }else{
                                a=false
                            }
                        }else{
                            a=false
                        }
                }else{
                    a=false
                }
                }else{
                    a=false//没过期
                }
                that.setData({
                    ifTimeout:a
                })
                console.log("ne  success:",that.data.ne)
                that.IfKong()
            }
          })
      
    },
   
    handletoget(event){
        
        var TIME = new Date()
        var that=this
        var a
        console.log("asd",that.data.ne.length)
        var last=that.data.ne.length-1
        for (var i = 0; i < that.data.ne.length; i++) {
            console.log(i)
            var time1=that.data.ne[i].Date
            var time2=that.data.ne[i].Time
            var year=TIME.getFullYear()
            var month=TIME.getMonth()+1
            var day=TIME.getDate()
            var hour=TIME.getHours()
            var minutes=TIME.getMinutes()
            var s1=time1[0]+time1[1]+time1[2]+time1[3]//年
            var x=0,y=0
            var s2,s3,s4,s5
            for (let i = 0; i < time1.length; i++) {
                if(time1[i]=="-"&&x==0){
                    x=i
                }else if(time1[i]=="-"){
                    y=i
                }    
            }
            // console.log("月份有几位",y-x)
            if((y-x)==2){
                  s2=time1[5]//月
            }else if((y-x)==3){
                s2=time1[5]+time1[6]
            }
            // console.log("今年月份是：",s2)
            
            if((y-x)==2&&time1.length==8){
                s3=time1[7]
             }else if((y-x)==2&&time1.length==9){
                s3=time1[7]+time1[8]//日
            }else if((y-x)==3&&time1.length==9){
                s3=time1[8]
            }else if((y-x)==3&&time1.length==10){
                s3=time1[8]+time1[9]
            }
            //  console.log("天数是：",s3)
            var j=0
            for (let i = 0; i < time2.length; i++) {
               if(time2[i]==":"){
                   j=i
               }
            }
            if(time2.length==3){
                 s4=time2[0]
                 s5=time2[2]
            }else if(time2.length==5){
                s4=time2[0]+time2[1]
                s5=time2[3]+time2[4]
            }else if(time2.length==4&&j==1){
                s4=time2[0]
                s5=time2[2]+time2[3]
            }else if(time2.length==4&&j==2){
                s4=time2[0]+time2[1]
                s5=time2[3]
            }
            console.log(time1,time2,s1,s2,s3,s4,s5)
                if((year-s1)>0){//是否过期
                    a=true//过期了
                }else if((year-s1)==0){
            
                if((month-s2)>0){
                    a=true
                }else if((month-s2)==0){
                        if((day-s3)>0){
                            a=true
                        }else if((day-s3)==0){
                            if((hour-s4)>0){
                                a=true
                            }else if((hour-s4)==0){
                                if((minutes-s5)>0){
                                    a=true
                                }else if((minutes-s5)==0){
                                    a=true
                                }else{
                                    a=false
                                }
                            }else{
                                a=false
                            }
                        }else{
                            a=false
                        }
                }else{
                    a=false
                }
                }else{
                    a=false//没过期
                }
        }
        console.log("是否可以发起召集丫",a)
        if(that.data.ne.length==0||a){
            
         wx.navigateTo({
          url:`/pages/called/called`,
            })
        }else{
            wx.showToast({
                title: '您目前仍有召集',
                icon:'none'
            })
        }
       

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that=this
        wx.getLocation({
            type:"gcj02",
            success:function(res){
                console.log(res)
                that.setData({
                    longitude:res.longitude,
                    latitude:res.latitude,
                    makers:[{
                        longitude:res.longitude,
                        latitude: res.latitude ,
                        iconPath:"../../images/location.png",
                        width:"100rpx",
                        heigth:"100rpx"
                        
                    }],
                    
                })
               
            },
        })
        that.setData({
            ifshow:true
        })
        this.GainData()
    },
    handlecommunicate(){
        wx.navigateTo({
            url:`/pages/communicate/communicate`,
              })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.GainData_in_out()
        this.GainData() 
        setTimeout(()=>{
            
        },1000)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.GainData()
        console.log("yingying")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        // this.GainData()
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
        this.onRefresh();
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
    handleNew(){
        console.log("获取数据长度",this.data.ne.length)
        var i;
        for(i=0;i<=this.data.ne.length-1;i++){
            if(i==this.data.ne.length-1){
                this.data.openId=this.data.ne[i]._id
            }
        }
         console.log("最后的id是",this.data.openId)
    },
    handledelete(event){
        var that=this
        this.handleNew()
        wx.showModal({
            title: '提示',
            content: '确定删除？',
            success: function (res) {
              if (res.confirm) {
                db.collection('activity').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_zero').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_one').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_two').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_three').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                   db.collection('activity_four').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_five').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_six').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_seven').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_eight').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                  db.collection('activity_nine').where({
                    _id: that.data.openId,
                    _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k'
                  }).remove({
                      success:function(res){
                         console.log("删除成功",res)
                      }
                  })
                that.onShow()
                if(that.data.ne.length==0){
                    that.setData({
                         jump:false,
                     })
                     console.log("jump  ne:",that.data.jump ,that.data.ne)
                 }
              } else {
                console.log('取消')
              }

            },
               
          })
        
        //   this.GainData()
         
        //   this.onLoad()
        //   this.onReady()
        //   this.IfNotData()
    },
      acquireData(){
            wx.navigateTo({
              url:`/pages/setoutRecord/setoutRecord`,
            })
      },
})