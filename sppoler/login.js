function check(){
            var a=document.getElementById("t1").value;
            var b=document.getElementById("t2").value;
            if(a.match("Lincoln")&&(b.match("Linc1234"))){
                        window.open("http://192.168.1.5/usr/Factory/machines/setting.shtm");
              }

            else{
                alert("Incorrect Credentials Try again!");
            }
        }
