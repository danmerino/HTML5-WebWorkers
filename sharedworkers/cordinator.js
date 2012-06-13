  var worker = new SharedWorker('shared-worker.js', 'peer-scope')
  var log = $("#log");

  $(document).ready(handleClick);

  worker.port.addEventListener('message', function (e) {
    log.append("<li>" + e.data.msg + "</li>") ;
  });

  worker.port.start();

  function handleClick() {
    $('body').delegate('#multiplex', 'click', function() {
      worker.port.postMessage({ msg: '[' + (new Date()).toTimeString() + '] Ping-Pong!' });
	
	});
  }

