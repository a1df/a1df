function request(prame,isHeader=false){
    return new Promise((resolve,reject)=>{
        wx.showLoading({
          title: '加载中，请稍后',
        })
        wx.request({
            ...prame,
            url:'http://localhost:5000' + prame.url,
            success:(res)=>{
                if(isHeader){
                    resolve({
                         list:res.data,
                         total:res.header["X-Total-Count"]
                    })
                }
               else{
                   resolve(res.data)
               }
            },
            fail:(err)=>{
                reject(err)
            },
            complete:()=>{
                //隐藏
                wx.hideLoading({
                  success: (res) => {},
                  fail: (res) => {},
                  complete: (res) => {},
                })
            }
        })
    })
}

export default request