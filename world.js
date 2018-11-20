window.onload =function(){
    var lookup = document.getElementById('lookup');
    var result = document.getElementById('result');
    var inputVal = document.getElementById('country');
    var allChecked = document.getElementById('checked');
    
    var xml = new XMLHttpRequest();
    
    lookup.addEventListener("click", function(){
        xml.onreadystatechange = handleRequest;
        if (allChecked.checked) {
            xml.open('GET', 'world.php?all=true', true);
        } else {
            xml.open('GET', `world.php?country=${inputVal.value}`, true);
        }
        xml.send();
    });
    
    function handleRequest (){
        if (xml.readyState === XMLHttpRequest.DONE) {
            if (xml.status === 200) {
                result.innerHTML = xml.responseText;
            } else {
                alert('There was a problem processing this request.');
            }
        } 
    }
    
};