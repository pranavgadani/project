const reacher = (a) => {
    if(String(a) == 'h'){
        var a = display("#home");
    }
    else if(String(a) == 'w'){
        display("#watch");
    }
    else if(String(a) == 'p'){
        display("#port");
    }
    else if(String(a) == 'o'){
        display("#order");
    }
    else if(String(a) == 'a'){
        display("#account");
    }
    if(String(a) == 'l'){
        display("#login");
    }
}

const display = (a) =>{

    var aar1 = ["#home","#watch","#port","#order","#account","#login"];
    var st1 = "_div";
    var ind = 0;

    for(var i=0;i<6;i++){

        if(String(a) == aar1[i]){
            
            ind = i;
            continue;

        }
        else
        {
            document.querySelector(aar1[i]+st1).style.display = "none";
        }
    }
    
    var d_link = document.createElement("a");
    d_link.href = aar1[ind] + st1;
    d_link.click()
    d_link = "";
    document.querySelector(aar1[ind]+st1).style.display = "block";
    destroyer(ind);
}
const destroyer = (n) => {
    for(var i=0;i<6;i++){
        if(i == n){
            var data = document.querySelector(".link_1_" + String(i));
            data.style.backgroundColor = "var(--bgf)";
            data.style.borderRight = "5px solid rgba(0, 0, 0, 0.594)";
            data.style.color = "var(--textcolor)";
        }
        else
        {
            var data = document.querySelector(".link_1_" + String(i));
            data.style.backgroundColor = "transparent";
            data.style.borderRight = "5px solid transparent";
            data.style.color = "var(--textcolor)";   
        }
    }
}


window.onload = function fun(){

    var data = document.querySelector(".watch_content");
    li = ["IDFC,5,78.90,79.78,398,391,-6.75","TATA POWER CO.,5,50.90,79.89,358,341,-4.75","UJJIVAN SMALL,5,72.89,79.90,390,356,-2.75"];

    for(var i=0;i<li.length;i++){

        var st = li[i].split(",");
        data.innerHTML += "<div class='wc_1'><div>" + st[0] + "</div><div>" + st[6] + "</div></div>";
    }

    var disp = document.querySelector(".p_content");
    for(var i=0;i<li.length;i++){

        var st = li[i].split(",");

        disp.innerHTML += " <div class='p_con1'>  <div class='sn'>" + st[0] + "</div>   <div class='qnt'>" + st[1] + "</div>    <div class='ltp'>" + st[2] + "</div> <div class='atp'>" + st[3] + "</div>  <div class='inv_val'>" + st[4] + "</div>  <div class='overallgl'>" + st[5] + "</div> <div class='todaymarket'>" + st[6] + "</div> </div>";
    }
    
};