window.onload=function(){
    var lookup = document.getElementById("lookup");
    var inputVal = document.getElementById("country");
    var result = document.getElementById("result");
    
    
    lookup.addEventListener("click",function(){
        let xml = new XMLHttpRequest();
        xml.onreadystatechange= function(){
            if(xml.status === 200 && xml.onreadystatechange=== 4){
                result.innerHTML= xml.responseText;
            }
        };
        
        xml.open("GET","world.php?q="+inputVal.value,true);
        xml.send();
        
    });
    
    
 
};

