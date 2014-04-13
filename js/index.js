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

var site = {
  posts: [
    {% for post in site.posts %}{
      title: "{{ post.title }}",
      lang: "{{ post.lang }}"
    },{% endfor %}{% unless forloop.last %},{% endunless %}
  ]
}

console.log(site);
