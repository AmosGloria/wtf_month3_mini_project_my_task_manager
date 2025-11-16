function renderTemplate(template, data) {
  return template.replace(/{{\s*([\w-]+)\s*}}/g, (match, key) => {
    return key in data ? data[key] : '';
  });
}

function loadStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/css/global.css';
  document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', function () {
  loadStyles();

  const componentElements = document.querySelectorAll('[data-import]');

  for (const element of componentElements) {
    const fileImport = element.getAttribute('data-import');

    fetch(fileImport)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((component) => {
        const data = { ...element.dataset };

        const rendered = renderTemplate(component, data);
        element.innerHTML = rendered;
      })
      .catch((err) => {
        console.error(`Error loading component from ${fileImport}:`, err);
      });
  }

  const components = ['bubbles', 'button', 'card'];
  const templates = ['header', 'footer'];

  components.forEach((component) => {
    import(`/components/${component}/${component}.js`)
      .then((module) => {
        console.log(`${component} component loaded.`);
      })
      .catch((err) => {
        console.error(`Error loading ${component} component:`, err);
      });
  });

  templates.forEach((template) => {
    import(`/templates/${template}/${template}.js`)
      .then((module) => {
        console.log(`${template} template loaded.`);
      })
      .catch((err) => {
        console.error(`Error loading ${template} template:`, err);
      });
  });
});
