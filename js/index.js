---
---

function selectLang(lang) {
  localStorage.setItem('selected_language', lang);
  window.location = '/' + lang;
}

function test() {
  var languages = [
    {% for lang in site.data.languages %}
    '{{ lang.name }}'{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
  console.log(languages);
}

console.log(site);

var tables = document.getElementsByTagName('table')

if (tables.length) {
  tables[0].classList.add('table');
}
