var defaultServer = 'http://douban.yesmeck.com';

chrome.storage.sync.get('server', function(data) {
  var server;
  if (!data['server']) {
    chrome.storage.sync.set({'server': defaultServer})
    server = defaultServer;
  } else {
    server = data['server'];
  }

  server = server.replace(/\/$/, '');

  ['faye', 'douban/client'].forEach(function(script) {
    var el = document.createElement('script');
    el.src = server + '/' + script + '.js';
    document.documentElement.firstChild.appendChild(el);
  });
});
