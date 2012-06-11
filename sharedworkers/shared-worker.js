var count = 0;
var peers = [];

self.addEventListener('connect', function (e) {
	var port = e.ports[0];
	peers.push(port);
    count += 1;
    port.postMessage({ msg: 'Worker Started! Port count: ' + count });
    port.addEventListener('message', function (e) {
      peers.forEach(function (port) {
        port.postMessage(e.data);
      });
    });
    port.start();
});
