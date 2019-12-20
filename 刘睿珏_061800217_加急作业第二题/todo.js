var oInput = document.getElementsByTagName("input")[0];
var ii = 0;
        function KeyDown(event) { 
                var event = event || window.event;
                if(event.keyCode == 13){//按下回车键的时候
                var data = oInput.value;
                if(data.trim() == "")
                {
                    alert("内容不能为空");
                }
                else{
                addData(data);
                clearData();
                }
                }
        }

        oInput.oninput = function() {
            var arrLi = document.getElementsByTagName("li");
            var arr = [];
            
            for(var i = 0;i < arrLi.length;i++) {
                if(arrLi[i].firstChild.innerHTML.trim().indexOf(this.value.trim()) != -1) {
                    arr.push(i);
                }
            }
            show(arr);
        };
        
       function show(arr) {
            var arrLi = document.getElementsByTagName("li");
            for(var i = 0;i < arrLi.length;i++) {
                arrLi[i].style.display = "none";//隐藏文本
            }
            
            // 显示
            if(arr.length > 0) {
                for(var i = 0;i < arr.length;i++) {
                    arrLi[arr[i]].style.display = "block";
                }
            } else {
                for(var i = 0;i < arrLi.length;i++) {
                    arrLi[i].style.display = "block";
                }
            }

        }
        function updata(value)
        {

        }
        function edit(ii,event)
        {
            
            var inn = document.getElementById("div223_"+ii);
            var data = inn.innerHTML;
            var innString = "";
            var apdateString = "";
            inn.innerHTML = innString;
            innString+= "<input type ='text' id = 'div222_"+ii+"' value='"+data+" ' />";
            inn.innerHTML = innString;
            var innput = document.getElementById("div222_"+ii);
            
            innput.setSelectionRange(0,innput.value.length);
            innput.focus();
            innput.onblur = function(){
               data = innput.value;
               apdateString+="<a id='div22_"+ii+"' onclick='edit("+ii+")',event>"+data+"</a>";
               inn.innerHTML = apdateString;
            }
        }
        
        function addData(data)  {
            var tempLi = document.createElement("li");
            var tempBtn = document.createElement("button");
            var tempString = "";
            var tempA = document.createElement("a");
            var oUl = document.getElementsByTagName("ul")[0];
            ii++;
            tempBtn.innerHTML = "已完成该事件";
            tempBtn.name = "delete";
            tempString +="<span id='div223_"+ii+"' onclick='edit("+ii+")'>"+data+"</span>";
            tempA.innerHTML = tempString;
            tempLi.appendChild(tempA);
            tempLi.appendChild(tempBtn);
            oUl.appendChild(tempLi);  
        }

        function clearData() {
            var oInput = document.getElementsByTagName("input")[0];
            oInput.value = "";
        }

        // 点击删除
        var oUl = document.getElementsByTagName("ul")[0];
        oUl.onclick = function a(event) {
            var event = event || window.event;
            var target = event.target;

            if(target.name == "delete") {
                target.parentNode.parentNode.removeChild(target.parentNode);
            }
        }
        