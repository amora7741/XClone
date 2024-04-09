import { useState, useEffect } from 'react';
import Button from './Button';

const CreateAccount = () => {
  const [page, setPage] = useState(1);
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [daysInMonth, setDaysInMonth] = useState(
    Array.from({ length: 31 }, (_, index) => index + 1)
  );

  useEffect(() => {
    const updateDays = (month, year) => {
      if (month && year) {
        const days = new Date(year, month, 0).getDate();
        return Array.from({ length: days }, (_, index) => index + 1);
      }
      return Array.from({ length: 31 }, (_, index) => index + 1);
    };

    setDaysInMonth(updateDays(birthMonth, birthYear));

    if (birthDay) {
      const maxDays = new Date(birthYear, birthMonth, 0).getDate();
      if (birthDay > maxDays) {
        setBirthDay('');
      }
    }
  }, [birthMonth, birthYear, birthDay]);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, index) => currentYear - index
  );

  return (
    <div className='createaccount-container'>
      <form action=''>
        {page === 1 && (
          <>
            <h1>Create your account</h1>
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
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>
            <div className='birthday-container'>
              <div className='fieldholder'>
                <select
                  name='birthMonth'
                  id='birthMonth'
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                >
                  <option value=''></option>
                  {Array.from({ length: 12 }, (_, index) => (
                    <option key={index} value={index + 1}>
                      {new Date(0, index).toLocaleString('default', {
                        month: 'long',
                      })}
                    </option>
                  ))}
                </select>
                <label htmlFor='birthMonth'>Month</label>
              </div>
              <div className='fieldholder'>
                <select
                  name='birthDay'
                  id='birthDay'
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                >
                  <option value=''></option>
                  {daysInMonth.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <label htmlFor='birthDay'>Day</label>
              </div>
              <div className='fieldholder'>
                <select
                  name='birthYear'
                  id='birthYear'
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                >
                  <option value=''></option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <label htmlFor='birthYear'>Year</label>
              </div>
            </div>
            <Button
              backgroundColor='white'
              textColor='black'
              onClick={() => setPage(2)}
            >
              Next
            </Button>
          </>
        )}

        {page === 2 && (
          <>
            <div>
              <h1>What should we call you?</h1>
              <p className='gray'>
                Your @username is unique. You can always change it later.
              </p>
            </div>
            <div className='fieldholder'>
              <input type='text' name='username' id='username' required />
              <label htmlFor='username'>Username</label>
              <p className='atsymbol'>@</p>
            </div>
            <Button
              backgroundColor='white'
              textColor='black'
              onClick={() => setPage(3)}
            >
              Next
            </Button>
          </>
        )}

        {page === 3 && (
          <>
            <div>
              <h1>You'll need a password</h1>
              <p className='gray'>Make sure it's 8 characters or more.</p>
            </div>
            <div className='fieldholder'>
              <input type='text' name='password' id='password' required />
              <label htmlFor='password'>Password</label>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CreateAccount;
