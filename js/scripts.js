  $(document).ready(function(){
    $("#counter").submit(function(event){
      event.preventDefault();
      var counterOutput=[];
      var count=0;
      for(var i= 0; i<=30; i+=5){
        // counterOutput.push([i]);
        // console.log(counterOutput[i]);
        // console.log(countedNum);
        // console.log(counterOutput[i]);
        count+=5;
        var newNumber = i + counterOutput.push();
        // console.log(count);
        $("#output").append("<li>" + newNumber + "</li>");
      };
  });
});
