/*Multiple attriutes to element http://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript*/
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("html").className = 'js';

  var title = document.querySelectorAll('.title');

  [].forEach.call(title, function(el) {

    var idNextElement = el.nextElementSibling.id,
        textTitle = el.innerHTML,
        linkTitle = '<a href="#'+idNextElement+'">'+textTitle+'</a>';

    el.innerHTML = linkTitle;

    setAttributes(el.nextElementSibling, {
      'aria-expanded':'false',
      'aria-controls':idNextElement
    });

    el.addEventListener('click', function(e) {
      e.preventDefault();
      nextElement = this.nextElementSibling;
      if(nextElement.getAttribute('aria-expanded') == 'false') {
        nextElement.style.display = "block";
        nextElement.setAttribute('aria-expanded','true');  
      }else {
        nextElement.style.display = "none";
        nextElement.setAttribute('aria-expanded','false');  
      }
      
    })
  });

});