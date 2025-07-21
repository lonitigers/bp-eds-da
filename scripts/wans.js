console.log('v3');
console.log('this is my production branch');
console.log(window.location.hostname);
if(window.location.hostname == 'da.live/')
{
  console.log('you are running on da.live');
}
else if(window.location.hostname == 'main--bp-eds-da--lonitigers.aem.page')
{
  console.log('you are running on preview');
}
else if(window.location.hostname == 'main--bp-eds-da--lonitigers.aem.live')
{
  console.log('you are running on publish');
}
else 
{
  console.log('unable to identify domain');
}

// Usage:
console.log("Running on domain:", getCurrentDomain());
