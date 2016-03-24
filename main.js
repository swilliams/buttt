module.exports = buttt;

function buttt() {
  var count = 1;
  if (arguments.length > 0 && parseInt(arguments[0])) {
    count = parseInt(arguments[0]);
  }
  var s = '';
  for (var i = 0; i < count; i += 1) {
    s += 'butts ';
  }
  return s.trim();
}
