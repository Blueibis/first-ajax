document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button1 = document.querySelector('#step2');
  var button2 = document.querySelector('#step3');
  var button3 = document.querySelector('button#step7');
  var button4 = document.querySelector('button#step8');
  var button5 = document.querySelector('button#step9');

  button1.addEventListener('click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'html',
    } );
  });

  button2.addEventListener('click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
    }).done(function(responseData) {
      console.log(responseData);
      var response = document.createElement('p');
      response.innerHTML = responseData;
      document.querySelector('#step3456').append(response);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      var failMessage = document.createElement('p');
      failMessage.innerHTML = jqXHR.responseText ? jqXHR.responseText : 'Something went wrong! We\'ll try out best to fix this, sorry!'
      document.querySelector('#step3456').append(failMessage);
    }).always(function() {
      console.log('Request completed!!!')
    });
  });

  button3.addEventListener('click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    }).done(function(response) {
      var count = document.createElement('p');
      count.innerHTML = response;
      document.querySelector('section#step7').append(count);
    })
  });

  button4.addEventListener('click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone: 'Pacific/Honolulu' },
      dataType: 'text',
    }).done(function(response) {
      var time = document.createElement('p');
      time.innerHTML = response;
      document.querySelector('section#step8').append(time);
    })
  });

  button5.addEventListener('click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    }).done(function(response) {
      var car = document.createElement('div');
      car.innerHTML = response;
      document.querySelector('#list').append(car);
    })
  });

});
