const componentElements = document.querySelectorAll('[data-import]');

for(const element of componentElements){
    // console.log(`componentElements found:`, element);
    const fileImport = element.getAttribute('data-import');
    // console.log(fileImport);

    fetch(fileImport)
    .then(response=>response.text())
    .then(component =>{
        element.innerHTML=component;
    })
    .catch(err=>{
        error(`Error loading component from ${fileImport}:`, err);  
    })
}

function loadStyles(){
   const link = document.createElement('link');
   link.rel='stylesheet';
   link.href='/assets/css/global.css';
   document.head.appendChild(link); 
}


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