console.log('v1');
console.log('this is my production branch');
function getCurrentDomain() {
  return window.location.hostname;
}

// Usage:
console.log("Running on domain:", getCurrentDomain());
