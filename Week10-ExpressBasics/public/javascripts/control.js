window.onload = function() {
  var fooButton = document.getElementById('foo');

  fooButton.onclick = function(){
    fetch('/foo')
      .then(function(response){
        return response.json();
      })
      .then(function(result){
        console.log(result);
        var output = document.getElementById('output');
        output.textContent = JSON.stringify(result);
      })
      .then(function(error){
        console.log(error);
      })
  }
}
