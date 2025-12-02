const taskModalBtn = document.getElementById('task-modalbtn');
const taskModal = document.getElementById('task-modal');

const dashboardButton = document.getElementById('dashboardButton')
dashboardButton.addEventListener('click', ()=>{
   window.location.href = "/templates/dashboard/dashboard.html";  
})

function openTaskModal(){
   taskModalBtn.addEventListener('click', ()=>{
   taskModal.style.display='block';
   modalContainer()
   })
}

 function modalContainer(){
      const displayModal = document.createElement('div');
      taskModal.appendChild(displayModal)
      displayModal.style.backgroundColor ='#F6F9FD';
      displayModal.style.width ='512px';
      displayModal.style.height ='416px';
      displayModal.classList.add('display-modal');
      displayModal.innerHTML = `
      <div class="header">
       <div class="header-cont">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#A3B3FF" d="M10.277 16.515c.005-.11.186-.154.24-.058c.254.45.686 1.111 1.176 1.412s1.276.386 1.792.408c.11.005.153.186.057.24c-.45.254-1.11.686-1.411 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.177-1.411c-.49-.301-1.276-.386-1.791-.408c-.11-.005-.154-.187-.058-.24c.45-.254 1.111-.686 1.412-1.177c.3-.49.386-1.276.408-1.791"/><path fill="#A3B3FF" d="M18.492 15.515c-.009-.11-.2-.156-.258-.062c-.172.283-.42.623-.697.793s-.692.236-1.022.262c-.11.008-.156.2-.062.257c.282.172.623.42.793.697s.236.693.262 1.023c.008.11.2.155.257.061c.172-.282.42-.623.697-.792s.693-.237 1.023-.262c.11-.009.155-.2.061-.258c-.282-.172-.623-.42-.792-.697s-.237-.692-.262-1.022" opacity="0.5"/><path fill="#A3B3FF" d="m14.703 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.544.088-.805.796-1.326 2.213l-.135.366c-.148.403-.222.604-.364.752s-.336.225-.724.38l-.353.141l-.247.1c-1.2.48-1.804.753-1.882 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.326.275.488.413.581.6c.094.187.107.403.133.835l.024.393c.094 1.52.14 2.28.635 2.542c.494.262 1.108-.147 2.336-.966l.318-.212c.349-.233.523-.35.723-.381s.401.024.806.136l.367.102c1.423.394 2.134.591 2.521.188c.388-.403.195-1.14-.19-2.613l-.1-.381c-.109-.419-.164-.628-.134-.835s.142-.389.366-.752l.203-.33c.785-1.276 1.178-1.914.924-2.426c-.255-.51-.988-.557-2.454-.648l-.38-.024c-.416-.026-.624-.039-.805-.135s-.314-.264-.58-.6"/><path fill="#A3B3FF" d="M8.835 13.326C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805" opacity="0.5"/>
      </svg>
      <h3>Create New Task</h3>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" id="close-modal" viewBox="0 0 512 512"><path fill="grey" fill-rule="evenodd" d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"/></svg>  
      </div>
      
      <p class="hearder-cont__detail">Add a new task to your productivity list</p>

      <div class="input-container">
         <label class="label">
            Title
         </label>
            <div class="task-title-cont">
               <input placeholder="Enter task title"/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="grey" d="M10.277 16.515c.005-.11.186-.154.24-.058c.254.45.686 1.111 1.176 1.412s1.276.386 1.792.408c.11.005.153.186.057.24c-.45.254-1.11.686-1.411 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.177-1.411c-.49-.301-1.276-.386-1.791-.408c-.11-.005-.154-.187-.058-.24c.45-.254 1.111-.686 1.412-1.177c.3-.49.386-1.276.408-1.791"/><path fill="#A3B3FF" d="M18.492 15.515c-.009-.11-.2-.156-.258-.062c-.172.283-.42.623-.697.793s-.692.236-1.022.262c-.11.008-.156.2-.062.257c.282.172.623.42.793.697s.236.693.262 1.023c.008.11.2.155.257.061c.172-.282.42-.623.697-.792s.693-.237 1.023-.262c.11-.009.155-.2.061-.258c-.282-.172-.623-.42-.792-.697s-.237-.692-.262-1.022" opacity="0.5"/><path fill="#A3B3FF" d="m14.703 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.544.088-.805.796-1.326 2.213l-.135.366c-.148.403-.222.604-.364.752s-.336.225-.724.38l-.353.141l-.247.1c-1.2.48-1.804.753-1.882 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.326.275.488.413.581.6c.094.187.107.403.133.835l.024.393c.094 1.52.14 2.28.635 2.542c.494.262 1.108-.147 2.336-.966l.318-.212c.349-.233.523-.35.723-.381s.401.024.806.136l.367.102c1.423.394 2.134.591 2.521.188c.388-.403.195-1.14-.19-2.613l-.1-.381c-.109-.419-.164-.628-.134-.835s.142-.389.366-.752l.203-.33c.785-1.276 1.178-1.914.924-2.426c-.255-.51-.988-.557-2.454-.648l-.38-.024c-.416-.026-.624-.039-.805-.135s-.314-.264-.58-.6"/><path fill="#A3B3FF" d="M8.835 13.326C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805" opacity="0.5"/>
                  </svg>
            </div>
      
               <label class="label">
                  Description
               </label>
         <div>
            <textarea placeholder="add task details"></textarea>
      </div>  
         <div class="priority-container">
            <div>
               <label class="label">Priority</labe>
                 <div>
                  <select class="priority">
                     <option>Low</option>
                     <option>Medium</option>
                     <option>High</option>
                  </select>
                </div>
            </div>
               <div>
               <label class="label">Due Date</label>
                  <div class=date-cont">
                     <input placeholder="dd/mm/yyyy" class="date-input">
                     <svg xmlns="http://www.w3.org/2000/svg" class="date-image" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="grey" rx="2" stroke-width="1"/><path fill="grey" d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"/><path stroke="grey" stroke-linecap="round" d="M7 3v3m10-3v3" stroke-width="1"/></g></svg>
                  </div>
               </div>
         </div> 
            <div class="button-cont">
            <button class="cancel">Cancel</button>
            <button class="create-task">Create Task</button>
            </div>
      </div>   
      `;
window.onclick= function closeModal(event){
if(event.target === taskModal){
   taskModal.style.display = 'none';
    taskModal.innerHTML = "";
}
}

const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', ()=>{
   taskModal.style.display='none';
   taskModal.innerHTML='';
})
   
   }

openTaskModal()
