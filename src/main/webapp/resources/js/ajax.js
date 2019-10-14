 
function makeAjaxCall(){

    var formData = serializeObject($('#employeeForm'));
    var contextRoot = "/" + window.location.pathname.split( '/' )[1];
	
	$.ajax({

        url: contextRoot + "/add",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(formData),
        dataType: 'json',
		success: function(responseJsonObj) {
			$('#formInput').html("");
			$("#formInput").append( '<H3 align="center"> New Employee Information <H3>');                
			$('#formInput').append("<H4 align='center'>First Name:  " + responseJsonObj.firstName  + "</h4>"  );
			$('#formInput').append("<H4 align='center'>Last Name: " + responseJsonObj.lastName + "</h4>" );
			$('#formInput').append("<H4 align='center'>Email: " + responseJsonObj.email + "</h4>");
			$("#formInput").append('<h4 align="center"> <a href="#" onclick="toggle_visibility(\'formInput\');resetForm(\'employeeForm\');"><b>EXIT</b> </a> </h4>');
			make_visible('formInput');
			make_hidden('errors');
		},

		error: function(jqXHR, status, exception){

            if(jqXHR.responseJSON.errorType == "ValidationError"){
                $('#errors').html("");
                $('#errors').append('<h3 style="text-align: center">Errors </h3>');
                $('#errors').append('<p>');

                    var erorColl = jqXHR.responseJSON.errors;
                    $.each(erorColl, function (i, error) {
                        $('#errors').append(error.message + '<br>');
                        
                    });
                $('#errors').append('</p>');
                $('#errors').show();

            } else {
                $('#errors').html("");
                $('#errors').append('<h3 style="text-align: center">Error </h3>');
                $('#errors').append('<p>');
                $('#errors').append(jqXHR.responseJSON.error);
                $('#errors').append('</p>');
                $('#errors').show();

            }











		}
	
	});
}

toggle_visibility = function(id) {
    var element = document.getElementById(id);
    if(element.style.display == 'block')
    	element.style.display = 'none';
    else
    	element.style.display = 'block';
 }

make_hidden = function(id) {
    var element = document.getElementById(id);
    element.style.display = 'none';
        }

make_visible = function(id) {
    var element = document.getElementById(id);
    element.style.display = 'block';
 }

resetForm = function(id) {
    var element = document.getElementById(id);
    $(element)[0].reset();

    }
// Translate form to array
// Then put in JSON format
 function serializeObject (form)
{
    var jsonObject = {};
    var array = form.serializeArray();
    $.each(array, function() {
         	jsonObject[this.name] = this.value;
    });
    return jsonObject;

};

