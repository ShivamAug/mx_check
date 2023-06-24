 var wifi=0;
   var mc_com=0;
   var mc_st_plus=0;
   var wifi_st_plus=0;
   var counter_set=5;
   var mc_status=1;

   // program for communication error
   function mc_error()
{
   if((wifi_st_plus < counter_set )&&(mc_st_plus<counter_set))
{
 var realtime_modal = document.getElementById("no_comm");
   realtime_modal.style.display = "none";
}

 if(parseFloat(mc_status)!=1)
 {
   mc_st_plus=mc_st_plus+1;
   if(mc_st_plus>counter_set)
   {
       var realtime_modal = document.getElementById("no_comm");
   realtime_modal.style.display = "block";
   var realtime_modal = document.getElementById("wifi_error");
   realtime_modal.style.display = "none";
   var realtime_modal = document.getElementById("mc_error");
   realtime_modal.style.display = "block";
   }
   else
   {
       var realtime_modal = document.getElementById("no_comm");
   realtime_modal.style.display = "none";
   }

 }
 else
 {
   mc_st_plus=0;
 }
}

function wifi_error()
{
   wifi_st_plus=wifi_st_plus+1;
   if(wifi_st_plus>10)
   {
       var realtime_modal = document.getElementById("no_comm");
   realtime_modal.style.display = "block";
   var realtime_modal = document.getElementById("wifi_error");
   realtime_modal.style.display = "block";
   var realtime_modal = document.getElementById("mc_error");
   realtime_modal.style.display = "none";
   }
   else
   {
      if(mc_st_plus<10)
      {
       var realtime_modal = document.getElementById("no_comm");
   realtime_modal.style.display = "none";

      }
     var realtime_modal = document.getElementById("wifi_error");
   realtime_modal.style.display = "none";  
   }
}
function update_count()
{
   if(wifi_st_plus<10)
   {
      var realtime_modal = document.getElementById("no_comm");
   
   realtime_modal.style.display = "none";
   var realtime_modal = document.getElementById("wifi_error");
   realtime_modal.style.display = "none";
   var realtime_modal = document.getElementById("mc_error");
   realtime_modal.style.display = "none";
   counter_set=50;
   mc_st_plus=0;
}
}
//************************END**********************************