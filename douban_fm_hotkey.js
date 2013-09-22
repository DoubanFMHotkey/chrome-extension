chrome.storage.sync.get('options', function(data) {
  var options;
  if (!data.options) {
    console.warn('Please set Douban FM Hotkey server address.')
  } else {
    options = data.options;
  }

  data.options.sever = data.options.server.replace(/\/$/, '');

  ['faye', 'douban/client'].forEach(function(script) {
    var el = document.createElement('script');
    el.src = data.options.server + '/' + script + '.js?access_token=' + data.options.token ;
    document.documentElement.firstChild.appendChild(el);
  });
});
