function save_options() {
  var serverInput = document.getElementById('server');
  var server = serverInput.value;

  chrome.storage.sync.set({'server': server}, function() {
    var status = document.getElementById("status");
    status.innerHTML = "保存成功";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
  });

}

function restore_options() {
  var defaultServer = 'http://douban.yesmeck.com';
  var server;
  chrome.storage.sync.get('server', function(data) {
    if (!data['server']) {
      chrome.storage.sync.set({'server': defaultServer})
      server = defaultServer;
    } else {
      server = data['server'];
    }
    var serverInput = document.getElementById('server');
    serverInput.value = server;
  })
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

