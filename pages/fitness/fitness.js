// pages/fitness/fitness.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        message:null,
        isDep:false,
        query:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    getMessage(){
        var that=this
        wx.cloud.database().collection('health').where({
            _openid: 'o-yxy5OJpZpQLCGEs-vP6clJkl2k',
        }).get({
            success: function(res) {
                    // console.log("0000",res.data)
                    that.setData({
                         message:res.data
                     })
                console.log("000",that.data.message)
            },
          
          })
    },
    search(e){
        var that=this
        console.log(e.detail.value)
        var value=e.detail.value
        var message=that.data.message
        var ifQuery=false
        var array=[];
        var k=0,g=1;
        console.log(array)
        console.log("输入时的字符串长度：",value.length)
        console.log("define的字符串长度：",message[0].define.length)
        console.log("kind的字符串长度",message[0].kind.length)
        for (let i = 0; i < message.length; i++) {
            array[i]=0
        }
        for (let a = 0; a < value.length; a++) {
            for (let i = 0; i < message.length; i++) {
                for (let j = 0; j < message[i].kind.length; j++) {
                    if(value[a]==message[i].kind[j]){
                        // console.log("来自：",i)
                        // ifQuery=true
                        array[k]=array[k]+1
                    }
                }
                k++
            }
            k=0
        }
        var max=array[0]
        for (let i = 1; i < array.length; i++) {
            // console.log(i,array[i])
            if(max<array[i]){
                max=array[i]
            }
        }
        console.log("最大的是",max)
        var index
        for (let i = 0; i < array.length; i++) {
           if(max==array[i]){
               console.log(message[i])
               that.setData({
                   query:message[i]
               })
           }
            
        }
        console.log("查到的索引是",index)
       this.setData({
           isDep:true
       })
        // console.log()
        // for (let a = 0; a < value.length; a++) {
        //     for (let i = 0; i < message.length; i++) {
        //         for (let j = 0; j < message[i].define.length; j++) {
        //             if(value[a]==message[i].define[j]){
        //                 console.log("来自：",i)
        //             }
                    
        //         }
            // }
        // }
    },
    handledelete(event){
        var that=this
       that.setData({
           isDep:false
       })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getMessage()
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
    handleEvent(){
        wx.navigateTo({
          url: '/pages/search/search',
        })
},
})