 var login=document.getElementById('login');
            var bg=document.getElementById('bg');
            // 1.点击"点击，弹出登陆框",弹出登陆窗口和遮盖层
            var adminBtn=document.getElementById('adminBtn');
            adminBtn.onclick=function(){
                login.style.display="block";
                bg.style.display="block";
                return false;
            }
            // 2.点击"关闭",隐藏登陆窗口和遮盖层
            var closeBtn=document.getElementById('closeBtn');
            closeBtn.onclick=function(){
                login.style.display="none";
                bg.style.display="none";
                return false;
            }
            // 3.鼠标拖拽功能
            var login_title=document.getElementById('login-title');
            login_title.onmousedown=function(e){
                e = e || window.event;
                var x=e.pageX || e.clientX +(document.body.scrollLeft || document.documentElement.scrollLeft);
                var y=e.pageY || e.clientY +(document.body.scrollTop || document.documentElement.scrollTop);

                var boxX=login.offsetLeft;
                var boxY=login.offsetTop;

                var mouse_in_boxX=x-boxX;
                var mouse_in_boxY=y-boxY;

                document.onmousemove=function(e){
                    var x=e.pageX || e.clientX +(document.body.scrollLeft || document.documentElement.scrollLeft);
                    var y=e.pageY || e.clientY +(document.body.scrollTop || document.documentElement.scrollTop);

                    login.style.left=x-mouse_in_boxX+256+'px';
                    login.style.top=y-mouse_in_boxY-142+'px';
                }
            }

            login_title.onmouseup = function(){
                document.onmousemove=null;
            }
			function shoeTips(spanId, tips) {
				var span = document.getElementById(spanId);
				span.innerHTML = tips;
			}
			/**
			 * 校验用户名
			 */
			function hint() {
				var value = document.getElementById("value").value;
				var hint = document.getElementById("hint");
				if(value.length < 6) {
					hint.innerHTML= "<span style=\"color:red;\">用户名太短</span>";
					return false;
				} else {
					hint.innerHTML = "用户名合格";
					return true;
				}
			}
			 
			function hint_hide() {
				var hint = document.getElementById("hint");
				hint.innerHTML = "";
			}
			function checkDate() {
				var reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
				var value = document.getElementById("date_value").value;
				var hint = document.getElementById("date_hint");
				if(reg.test(value)) {
					hint.innerHTML = "日期格式正确";
					return true;
				} else {
					hint.innerHTML = "<span style=\"color:red;\">日期格式错误</span>";
					return false;
				}
			}
			/**
			 * 校验密码
			 */
			 
			function checkPass() {
				var value = document.getElementById("pass_value").value;
				var hint = document.getElementById("pass_hint");
				if(value.length < 6) {
					hint.innerHTML = "<span style=\"color:red;\">密码太短</span>";
					return false;
				} else {
					hint.innerHTML = "密码格式合格";
					return true;
				}
			}
			function pass_hide() {
				var hint = document.getElementById("pass_hint");
				hint.innerHTML = "";
			}
			/***
			 * 确认密码的校验
			 */
			function checkPassPass() {
				var papavalue = document.getElementById("passpass_value").value;
				var value = document.getElementById("pass_value").value;
				var papahint = document.getElementById("passpass_hint");
				if(papavalue != value) {
					papahint.innerHTML = "<span style=\"color:red;\">两次密码不一致</span>";
					return false;
				} else {
					papahint.innerHTML = "正确";
					return true;
				}
			}
			 
			function passpass_hide() {
				var papahint = document.getElementById("passpass_hint");
				papahint.innerHTML = "";
			}
			/**
			 * 校验邮箱
			 */
			function checkEmail(strEmail) 
			{      
			    var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
			    if ( emailReg.test(strEmail) ) {
			        return true;
			    }
			    else {
				//	alert("您输入的Email地址格式不正确！");
					return false;
			    }
			};
			function emailCheck() {
				var emailValue = document.getElementById("email").value;
				var email_hint = document.getElementById("email_hint");
				var flag = checkEmail(emailValue);
				if(flag) {
					email_hint.innerHTML = "邮箱格式正确";
					return true;
				} else {
					email_hint.innerHTML = "<span style=\"color:red;\">邮箱格式错误</span>";
					return false;
				}
			}
			 
			function emailHide() {
				var email_hint = document.getElementById("email_hint");
				email_hint.innerHTML = "";
			}
			/**
			 * 校验手机号
			 */
			function checkMobile( strMobile )
			{	//13588888888
			    var regu = /^[1][345678][0-9]{9}$/;
			    var re = new RegExp(regu);
			    if (re.test(strMobile)) {
			        return true;
			    }
			    else {
			        return false;
			    }
			};
			function phoneCheck() {
				var phone = document.getElementById("phone").value;
				var phone_hint = document.getElementById("phone_hint");
				var flag = checkMobile(phone);
				if(flag) {
					phone_hint.innerHTML = "手机号格式正确";
					return true;
				} else {
					phone_hint.innerHTML = "<span style=\"color:red;\">手机号格式错误</span>";
					return false;
				}
			}
			 
			function phoneHide() {
				var phone_hint = document.getElementById("phone_hint");
				phone_hint.innerHTML = "";
			}
			function checkForm() {
				var flag = emailCheck() && checkPass() && checkPassPass() && hint() && phoneCheck();
				return flag;
			}