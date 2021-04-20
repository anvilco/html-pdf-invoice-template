// From https://stackoverflow.com/a/32144585
function load(target, url) {
  var r = new XMLHttpRequest();
  r.open("GET", url, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    target.innerHTML = r.responseText;
  };
  r.send();
}
