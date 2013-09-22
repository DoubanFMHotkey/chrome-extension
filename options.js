function save_options() {
  var serverInput = document.getElementById('server'),
      tokenInput = document.getElementById('token'),
      options = {
        server: serverInput.value,
        token: tokenInput.value
      };

  chrome.storage.sync.set({'options':  options}, function() {
    var status = document.getElementById("status");
    status.innerHTML = "保存成功";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
  });

}

function restore_options() {
  var defaultOptions = { server: 'http://douban.yesmeck.com'},
      options;
  chrome.storage.sync.get('options', function(data) {
    if (!data.options) {
      chrome.storage.sync.set({'options': defaultOptions})
      options = defaultOptions;
    } else {
      options = data.options;
    }
    for (var key in options) {
      var input = document.getElementById(key);
      input.value = options[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

