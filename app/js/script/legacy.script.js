(function() {
  
  
  // html5 element support
  // --------------------------------
  
  document.createElement('header'); 
  document.createElement('nav');
  document.createElement('main');
  document.createElement('section');
  document.createElement('article');
  document.createElement('aside'); 
  document.createElement('footer');
  

  // display ng-cloak
  // --------------------------------
  
  //create style tag
  var style = document.createElement('style');
  style.type = 'text/css';
  
  //add css to style tag to display [ng-cloak]
  var css = '[ng-cloak] { display: block !important; }';
  if (style.styleSheet) style.styleSheet.cssText = css;
  else style.appendChild(document.createTextNode(css));
  
  //append style to document head
  var dochead = document.head || document.getElementsByTagName('head')[0];
  dochead.appendChild(style);


}());