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
        ifTimeout:[],
        time:"",
        accurate:[],
        ne_accurate:[],
        show:[]
    },
    IfKong(){
        var that=this
        // console.log("111111")
        if(that.data.show.length==0){
           that.setData({
                jump:false,
            })
            console.log("jump  ne_accurate:",that.data.jump ,that.data.ne)
        }else{
            that.setData({
                jump:true,
            })
                console.log("jump  ne_accurate:",that.data.jump ,that.data.accurate)
            
        }
    },
    GainData_in_out(){//获取数据

        var that=this
        db.collection('activity_six').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                    that.setData({
                         show:res.data
                     })
                     console.log("获取到show了")
            }
          })
       
          db.collection('activity').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
          })
          .get({
            success: function(res) {
                    that.setData({
                         accurate:res.data
                     })
            }
          
          })
    },
    Gain_ne(){
        var that=this
        var a=true
        var p=0
        var TIME = new Date()
        console.log("youma",that.data.show)
        for (var i = 0; i < that.data.show.length; i++) {
            console.log(i)
            var time1=that.data.show[i].Date
            var time2=that.data.show[i].Time
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
       
        if(!a){
            
            console.log("没超时",i,that.data.show)
            that.data.ne_accurate[p++]=that.data.show[i]
               that.setData({
                   ne_accurate:that.data.ne_accurate
               })      
            
               console.log("数据",that.data.ne_accurate)
            that.IfKong()
        }
     }         
        console.log("数据1",that.data)
    },
    // GainData(){//获取数据
    //     // console.log("yaohuoqushujulo")
    // var TIME = new Date()
    // var that=this

    //           for(var i=0;i<res.data.length;i++){
    //             var ne=res.data[i].choose_Message
    //             if(ne=="跑步"){
    //                 that.data.accurate[j++]=res.data[i]
    //               }
    //           }
    //             console.log("获取到了吗",that.data.accurate) 
    //             var last=that.data.accurate.length-1
    //             for (var i = 0; i < that.data.accurate.length; i++) {
    //                     console.log(i)
    //                         var time1=that.data.accurate[last].Date
    //                         var time2=that.data.accurate[last].Time
    //                         var year=TIME.getFullYear()
    //                         var month=TIME.getMonth()+1
    //                          var day=TIME.getDate()
    //                          var hour=TIME.getHours()
    //                          var minutes=TIME.getMinutes()
    //                          var s1=time1[0]+time1[1]+time1[2]+time1[3]//年
    //                          var s2=time1[5]+time1[6]//月
    //                          var s3=time1[8]+time1[9]//日
    //                          var s4=time2[0]+time2[1]//时
    //                          var s5=time2[3]+time2[4]//分
            
    //                          if((year-s1)>0){//是否过期
    //                              a=true//过期了
    //                          }else if((year-s1)==0){
                            
    //                             if((month-s2)>0){
                                  
    //                                 a=true
    //                             }else if((month-s2)==0){
    //                                 console.log("asdasd")
    //                                     if((day-s3)>0){
    //                                         a=true
    //                                     }else if((day-s3)==0){
    //                                         if((hour-s4)>0){
    //                                             a=true
    //                                         }else if((hour-s4)==0){
    //                                             if((minutes-s5)>0){
    //                                                 a=true
    //                                             }else if((minutes-s5)==0){
    //                                                 a=true
    //                                             }else{
    //                                                 a=false
    //                                             }
    //                                         }else{
    //                                             a=false
    //                                         }
    //                                     }else{
    //                                         a=false
    //                                     }
    //                             }else{
    //                                 a=false
    //                             }
    //                          }else{
    //                              a=false//没过期
    //                          }
    //                     console.log("a:",a)
    //                 if(!a){
    //                     console.log("555556",that.data.accurate.length,that.data.show.length)
    //                       if(that.data.accurate.length>that.data.show.length){
    //                         db.collection('activity_two').add({
    //                             // data 字段表示需新增的 JSON 数据
    //                             data: {
    //                                 _id:that.data.accurate[i]._id,
    //                                 Date:that.data.accurate[i].Date,
    //                                 Leave_Message: that.data.accurate[i]. Leave_Message,
    //                                 Place: that.data.accurate[i].Place,
    //                                 Time: that.data.accurate[i].Time,
    //                                 choose_Message: that.data.accurate[i].choose_Message,
    //                                 currentTime: that.data.accurate[i].currentTime,
    //                                 kind:that.data.accurate[i].kind,
    //                                 ifFinish:that.data.accurate[i].ifFinish,
    //                             },
    //                             success: function(res) {
    //                               // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    //                               console.log("insert success：",res)
    //                             }
    //                           })
                            
    //                     }            
                       
    //                 //   console.log("数据",that.data.ne_accurate[i])
                        
    //                 }             
    //             }
    //                 that.IfKong()
    //         },
      
    // },
    ifEeceive(event){
        var that= this
        console.log("event:",event)
          for (var i = 0; i < that.data.show.length; i++) {
              if(!that.data.show[i].ifFinish){
                wx.showModal({
                    title: '提示',
                    content: '是否参加',
                    success: function (res) {
                        // console.log("1111",event.currentTarget.id)
                    if (res.confirm) {
                        db.collection('activity_six').doc(event.currentTarget.id).update({
                            // data 传入需要局部更新的数据
                            data: {
                            // 表示将 done 字段置为 true
                            ifFinish: true
                            },
                            success: function(res) {
                            console.log("activity_six",res)
                            }

                        })

                        var last=that.data.accurate.length-1
                        db.collection('activity').doc(that.data.accurate[last]._id).update({
                            // data 传入需要局部更新的数据
                            data: {
                            // 表示将 done 字段置为 true
                            ifFinish: true
                            },
                            success: function(res) {
                            console.log("activity:",res)
                            }
                        })
                    } else {
                        console.log('取消')
                    }
                    }
                })
              }else{
                  wx.showModal({
                    title:"提示",
                    content:"已被接取"
                  })
              }
              
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
         this.GainData_in_out()
         
        
        setTimeout(()=>
        {
            this.Gain_ne()
            console.log("有吗",this.data.ne_accurate)
        }, 1000)
        
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