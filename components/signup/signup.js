function signup (){
  const signupForm = document.querySelector('.signup-form');
  const signupName= document.querySelector('.signup-form__name');
  const signupPassword = document.querySelector('.signup-form__password');
  const signupEmail = document.querySelector('.signup-form__email');
  const url='https://nvmtqisivhyqyknxitmq.supabase.co/functions/v1/make-server-789385fc/signup';

   fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
  .then(response=>{
    if(!response){
      throw new error('could not submit details')
    }
    else{
      response.json()
    }
  })
  .then(data=>{
    return 'signup was successful'
  })
  .catch(error=>{
    return 'signup was not successful.'
  })
}

