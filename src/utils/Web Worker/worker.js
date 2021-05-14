function fib(n) {
  if (n < 3) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
onmessage = function (event) {
  console.log("分线程", event.data, typeof event.data, self);
  const res = fib(event.data || 0);
  postMessage(res);
};
