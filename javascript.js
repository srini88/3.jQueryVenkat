///benefits of CDn

/////////////Content delivery network...systemo of distributed servers that hosts resources as images, CSS< JS files etc

// instead of hosting on own web server 

////jquery will be download from the CDN server that is closest to the user..

////browser caching -- jquery is used on many popular websites...if a user has already visited a webpage that uses jquery from CDN, the jquery file would already been cached..

///parallel download..

///reduced server load --- the http request for jquery file is handled by the cdn server, so the load on your web server is reduced.... this also means there is a saving on your website bandwidth consumption which in turn will reduce your hosting cost.


////your client firewalls manay block the CDN. so you may have to request your clients to whitelist the CDN

////what if the requrie jqery file from CDN server is not downloaded...

///so you got to fall back gracefully
///backslash in the closing script tag --- to escape the /
//the below check if the jQuery has been loaded from the CDN , if not, do the document.write 
window.jQuery || document.write("<script src='myJqeury.js'><\/script");