const CreateAccount = () => {
  return (
    <div className='createaccount-container'>
      <h1>Create your account</h1>
      <form action=''>
        <div className='fieldholder'>
          <input type='text' required name='name' id='name' />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='fieldholder'>
          <input type='email' required name='email' id='email' />
          <label htmlFor='email'>Email</label>
        </div>
        <div>
          <h4>Date of birth</h4>
          <p className='gray'>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
        </div>
        <div className='birthday-container'></div>
      </form>
    </div>
  );
};

export default CreateAccount;
