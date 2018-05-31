  		function createClicked(){
  var file = document.querySelector('input[type=file]').files[0]; //sames as here
      tempSrc = "/public/images/" + file.name;
          if ($("#ident").val() == "") {
            alert("ERROR");
            return false;
          }

          $.ajax({
            url: "/create",
            type: "POST",
            data: {ident:Number($("#ident").val()), name:$("#name").val()},
            success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("CREATE VALID");
            } ,
            dataType: "json"
          });
    		  return false;
    	}

      function updateClicked(){

          if ($("#ident").val() == "") {
            alert("ERROR");
            return false;
          }
          $.ajax({
          url: "/update",
          type: "PUT",
          data: {ident:Number($("#ident").val()) , name:$("#name").val()},
          success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("UPDATE VALID");
            } ,
          dataType: "json"
        });
          return false;
      }

  		function createImageClicked(){
          if ($("#createImage").val() == "") {
            alert("ERROR");
            return false;
          }

          $.ajax({
            url: "/createImage",
            type: "POST",
            data: {ident:Number($("#ident").val()), name:$("#name").val()},
            success: function(data){
              if (!data)
                alert("ERROR");
              else
                alert("CREATE VALID");
            } ,
            dataType: "json"
          });
    		  return false;
    	}

  		$(document).ready(function(){
        $("#createButton").click(createClicked);
        $("#updateButton").click(updateClicked);
  		});
