self.requestFileSystemSync = self.webkitRequestFileSystemSync ||
                             self.requestFileSystemSync;
self.BlobBuilder = self.BlobBuilder ||
                   self.WebKitBlobBuilder || self.MozBlobBuilder;

function makeRequest(url) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // Note: synchronous
    xhr.responseType = 'arraybuffer';
    xhr.send();
    return xhr.response;
  } catch(e) {
    return "XHR Error " + e.toString();
  }
}

function onError(e) {
  postMessage('ERROR: ' + e.toString() + 'and code' + e.code);
}

onmessage = function(e) {
  var data = e.data;

  // Make sure we have the right parameters.
  if (!data.fileName || !data.url || !data.type) {
    return;
  }

  var fs = requestFileSystemSync(TEMPORARY, 1024 * 1024 /*1MB*/);


    postMessage('Got file system.');
	var found = true;

	try
	{
		var fileEntry = fs.root.getFile(data.fileName);
	}
	catch(e) {
		if(e.code == FileError.NOT_FOUND_ERR)
		{
			found = false;
		}
	}
	postMessage("checking file");
	
	if(found) {
		postMessage('FROM CACHE');
        postMessage(fileEntry.toURL());
	}
	else {

    	var fileEntry = fs.root.getFile(data.fileName, {create: true});

    	postMessage('Got file entry.');

    	var bb = new BlobBuilder();
    	bb.append(makeRequest(data.url));

    try {
      	postMessage('Begin writing');
      	fileEntry.createWriter().write(bb.getBlob(data.type));
      	postMessage('Writing complete');
      postMessage(fileEntry.toURL());
    } catch (e) {
      	onError(e);
    }
	}
};