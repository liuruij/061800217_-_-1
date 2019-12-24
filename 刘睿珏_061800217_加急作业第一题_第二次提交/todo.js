var oInput = document.getElementsByTagName("input")[0];
var length = 0;
var setData; 
oInput.onclick= function()
{
    oInput.value = "";
}
function KeyDown(event) { 
   
    var event = event || window.event; 
    if(event.keyCode == 13){//按下回车键的时候
    
    if(oInput.value.trim() == "")
    {
        alert("内容不能为空");
    }
     else{
        var col = localStorage.getItem("todoThing");
        if(col == null)
        {
            setData = [];
        }
        else
        {
            setData = JSON.parse(col);
        }
        var todoThing = {"todo":oInput.value};
        setData.push(todoThing);
        var obj = JSON.stringify(setData);
        localStorage.setItem("todoThing",obj);
        addData();
        clearData();
    }
    }
}


        
        function edit(ii)
        {
            addData();
            
            var innString = "";
            var inn = document.getElementById("div223_"+ii);
            var title = inn.innerHTML;
            innString+= "<input type ='text' id = 'div222_"+ii+"' value='"+title+" ' />";
            inn.innerHTML = innString;
            var innput = document.getElementById("div222_"+ii);
            innput.setSelectionRange(0,innput.value.length);
            innput.focus();
            innput.onblur = function(){
               if(innput.value.length == 0)
               {
                   inn.innerHTML = title;
                   alert("内容为空");
               }
               else{
                var dataOut = localStorage.getItem("todoThing");
                var data = JSON.parse(dataOut);
                   var todo = data.splice(ii,1)[0];
                   todo["todo"] = innput.value;
                   data.splice(ii,0,todo);
                   localStorage.setItem("todoThing",JSON.stringify(data));
                   addData();
               }
            };
        }
        
        function addData()  {

            var tempString = "";
            var dataOut = localStorage.getItem("todoThing");
            var oUl = document.getElementsByTagName("ul")[0];
            var data = JSON.parse(dataOut);
            if(dataOut == null)
            {
                oUl.innerHTML = "";
                return;
            }
            for(var i = data.length-1;i>= 0; i--)
            {
            tempString +="<li><span id='div223_"+i+"' onclick='edit("+i+")'>"+data[i].todo+"</span>"+
                        "<input type='button' name='delete' value='delete' id='div3_2' onclick = 'a("+i+")'/></li>";
            }
            oUl.innerHTML = tempString;

        }

        function clearData() {
            var oInput = document.getElementsByTagName("input")[0];
            oInput.value = "";
        }

        // 点击删除
        
        function a(i) {
            var oUl = document.getElementById("div223_"+i);
            var dataOut = localStorage.getItem("todoThing");
            var data = JSON.parse(dataOut);
            var todo = data.splice(i,1)[0];
            localStorage.setItem("todoThing",JSON.stringify(data));
            addData();
        }
        var Clear = document.getElementById("div3_1");
        Clear.onclick = function()
        {
            localStorage.clear();
            addData();
        }
        
window.onload = addData();