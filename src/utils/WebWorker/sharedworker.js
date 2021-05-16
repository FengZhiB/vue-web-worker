function fib(n) {
  if (n < 3) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

addEventListener("connect", function (e) {
  console.log("eeee", e);
  var port = e.ports[0];
  port.start();
  port.addEventListener("message", function (e) {
    res = fib(e.data);
    port.postMessage(res);
  });
  // port.start();
});
