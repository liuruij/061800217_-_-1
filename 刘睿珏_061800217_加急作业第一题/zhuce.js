//空白 1 2 3
//密码长度过长或过短 4
//两次输入不同 5
//邮箱格式不正确 6
//密码格式不正确 7
//重复 8
//输入长度过长 9
//密码当中必须含有至少三位大写字母 10
var queren = document.getElementById("div2_q");
var Email  = document.getElementsByTagName("input")[0].value;
var Code = document.getElementsByTagName("input")[1].value;
var Seccode = document.getElementsByTagName("input")[2].value;
var i = -1;
var a = [20];
var upperCodeNum = 0;
var whereFault = 0;
function myFunction(event)
{
    i++;
    var x = event.which || event.keyCode;
    a[i] = x;
    if(x >= 65 && x <= 90)
    {
        upperCodeNum++;
    }
    for(var k = i-1; k >= 0; k--)
    {
          if(a[k] == a[i])
          {
             document.getElementById('div2_m').setAttribute('disabled', 'disabled');//当出现重复字符的时候不允许输入
             addAlert(2,8);
             document.getElementById('div2_m').removeAttribute('disabled');
             for(var j = 0; j < 20; j++) a[j] = 0;
             i = -1;
             break;
             
          }
    }
    if(i>14)
    {
        document.getElementById('div2_m').setAttribute('disabled', 'disabled');//当长度超过十五个字符的时候不允许输入
        addAlert(2,9);
        document.getElementById('div2_m').removeAttribute('disabled');
        for(var j = 0; j < 20; j++) a[j] = 0;
        i = -1;
    }

}
function check()
{
    var Email  = document.getElementsByTagName("input")[0].value;
    var Code = document.getElementsByTagName("input")[1].value;
    var Seccode = document.getElementsByTagName("input")[2].value;
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var mycode1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=[#*&?]+$) {9.15}$/; 
    if(Email== "")
        addAlert(1,1);
    if(Code.trim() == "") 
        addAlert(2,2);
    if(Seccode.trim() == "")
        addAlert(3,3);
    if(Email.trim() != "" &&Code.trim() != "" && Seccode.trim() != "")
    {
        if(Code != Seccode)
        {   addAlert(2,5);
            addAlert(3,5);}
        if(Code.length>15 || Code.length<9)
        {    addAlert(2,4)}
        if(!myreg.test(Email)){
            addAlert(1,6);
        } 
        if(!mycode1.test(Code))
        {
            addAlert(2,7);
        }  
        if(upperCodeNum < 3)
        {
            addAlert(2,10);
        }
    }
    if(whereFault == 0)
    {
        alert("注册成功");
    }
} 
function addAlert(flag,question)
{
    var addPlace = document.getElementById("div2_ul"+flag);
    var addLi = document.createElement("li");
    var addString = "";
    var R = ", 请双击重新输入";
    if(question == 1)
        addString+="请输入邮箱";
    if(question == 2)
        addString +="请输入密码";
    if(question == 3)
        addString+="请输入再次确认密码";
    if(question == 4)
        addString += "密码长度应在（9-15位）";
    if(question == 5)
        addString += "两次输入的密码不相同";
    if(question == 6)
        addString +="邮箱格式不正确";
    if(question == 7)
        addString +="密码格式不正确";
    if(question == 8)
        addString+="密码当中不可以出现重复字符";
    if(question == 9)
       addString+="密码长度不可超过15";
    if(question == 10)
        addString += "密码当中必须含有至少三位大写字母";
    addLi.innerHTML = addString+R;
    addPlace.appendChild(addLi);
    whereFault++;
}
function reInput(flag)
{    
    subAlert(flag);
    Code = "";
}
function subAlert(flag)
{
    var subPlace = document.getElementById("div2_ul"+flag);
    var subLi = subPlace.querySelectorAll("li");
    for(var i = 0; i < subLi.length;i++)
    {
        subPlace.removeChild(subPlace.getElementsByTagName("li")[i]);
    }
}