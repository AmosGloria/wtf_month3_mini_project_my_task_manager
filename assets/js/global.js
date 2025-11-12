document.addEventListener("DOMContentLoaded", function() {
    const components = ['bubbles', 'button', 'card'];

    const templates=['header', 'footer',];

    components.forEach(component=>{
        import(`/components/${component}/${component}.js`)
        .then(module=>{
            console.log(`${component} component loaded.`);
        })
        .catch(err=>{
            console.error(`Error loading ${component} component:`, err);
        });
    })

    templates.forEach(template=>{
        import(`/templates/${template}/${template}.js`)
        .then(module=>{
            console.log(`${template} template loaded.`);
        })
        .catch(err=>{
            console.error(`Error loading ${template} template:`, err);
        })
    })
    
})