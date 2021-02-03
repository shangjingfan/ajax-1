
// console.log('我是main.js 123')
let n = 1
getPage.onclick = () => {
  n += 1
  if (n <= 3) {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n}`)
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response)
        array.forEach(item => {
          const li = document.createElement('li')
          li.textContent = item.id
          ulList.appendChild(li)
        })
      }
    }
    request.send()
  } else {
    alert("最后一页，没了")
  }
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    // console.log(request.readyState)
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let object
        try {
          object = JSON.parse(request.response)
        } catch (error) {
          console.log('出错了，错误详情是')
          console.log(error)
          object = 'FUN'
        }
        myName.innerHTML = object.name
      }
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // console.log(request.responseXML) // dom对象
        const dom = request.responseXML
        const text1 = dom.getElementsByTagName('warning')[0].textContent
        console.log(text1.trim())
      } else {
        alert('请求XML失败')
      }
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onload = () => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => { }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    // 创建script标签
    const script = document.createElement('script')
    // 填写script标签内容
    script.innerHTML = request.response
    // 插到body里
    document.body.appendChild(script)
  }
  request.onerror = () => {
    console.log('请求CSS失败')
  }
  request.send()
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/css')
  request.onreadystatechange = () => {
    //等于4代表加载完成，但不知道加载的是成功页面还是失败页面
    if (request.readyState === 4) {
      // http状态码：200开头的百位数一般是成功
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert('加载css失败')
      }
    }
  }
  request.send()
}

