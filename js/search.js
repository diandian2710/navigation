const sInfor = document.getElementById("search");
const sGoogle = document.getElementById("google");
const sGitHub = document.getElementById("github");
const sTranslate = document.getElementById("translate");
const sCON = document.getElementById("con");
const sLeetCode = document.getElementById("leetCode");
const sStackOverFlow = document.getElementById("stackOverFlow")


//isEmpty;
let isEmpty =function (obj)  {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
      return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp("^([ ]+)|([　]+)$");
        //判断有空格，如果有空格，删除左边空格；
        if( reg.test(obj)){
            obj=obj.replace(/(^\s*)/g,"");
        }

      if (obj === "") {
        return true;
      }


    }
    return false;
}
//doAction 搜索跳转方法
/*
p：搜索网址前段
n: 搜到网址后段
h: 搜索首页
*/
let doAction = function (p, n, s) {
  if (isEmpty(sInfor.value)) {
    window.open(s,"_self")
  } else {
    window.open(p + sInfor.value + n,"_self")
  }

}

//拼接网址
let p = ''
let n = ''
let s = ''


document.onkeydown = function (e) { // 回车提交表单
  // 兼容FF和IE和Opera
  var theEvent = window.event || e
  var code = theEvent.keyCode || theEvent.which || theEvent.charCode
  if (code === 13) {
    p = 'https://www.google.com/search?q='
    n = '&gws_rd=cr&nfpr=1&newwindow=1&num=30'
    s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30'
    doAction(p, n, s)
  }
}

//GitHub
sGitHub.onclick = function () {
  p = 'https://github.com/search?q='
  n = ''
  s = 'https://github.com'
  doAction(p, n, s)
}

sStackOverFlow.onclick = function () {
  p = 'https://stackoverflow.com/search?q='
  n = ''
  s = 'https://stackoverflow.com/search?q='
  doAction(p, n, s)
}
//translate
sTranslate.onclick = function () {
  p = 'https://cn.bing.com/dict/search?q='
  n = ''
  s = 'https://cn.bing.com/dict/?mkt=zh-cn'
  doAction(p, n, s)
}

//CON
sCON.onclick = function () {
  p = 'https://rezdycom.atlassian.net/browse/CON-'
  n = ''
  s = 'https://rezdycom.atlassian.net/browse'
  doAction(p, n, s)
}

//LeetCode
sLeetCode.onclick = function () {
  p = 'https://www.youtube.com/c/HuaHuaLeetCode/search?query=LeetCode%20'
  n = ''
  s = 'https://www.youtube.com/c/HuaHuaLeetCode/featured'
  doAction(p, n, s)
}

