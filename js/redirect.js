var selected_language = localStorage.getItem('selected_language'),
    navigator_language = window.navigator.userLanguage || window.navigator.language,
    location;

if (selected_language) {
  location = selected_language + '/';
} else {
  if (navigator_language.indexOf('ro-') === 0) {
    location = '/ro';
  } else {
    location = '/fi';
  }
console.log(location);
}

