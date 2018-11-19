window.onload=function(){
    var lookup = document.getElementById("lookup");
    var inputVal = document.getElementById("country");
    var result = document.getElementById("result");
    
    
    lookup.addEventListener("click",function(){
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = function() {
            if(xml.readyState === XMLHttpRequest.DONE){
                if (xml.status=== 200){
                result.innerHTML= xml.responseText;
                }
            }
            // Try changing the above if statement to something like the following:
            /*if (xml.readyState === XMLHttpRequest.DONE) {
                if (xml.status === 200) {
                    result.innerHTML = xml.responseText;
                }
            }*/
        };
        
        xml.open("GET","world.php?all=true",true);
        // The above line should really have "world.php?country=" instead of
        // "world.php?q=". Remember in your world.php file you have $_GET['country']
        xml.send();
        
    });
    
};   
 


