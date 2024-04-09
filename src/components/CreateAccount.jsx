import { useState, useEffect } from 'react';
import Button from './Button';

const CreateAccount = () => {
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
        <div className='birthday-container'>
          <select
            name='birthMonth'
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
          >
            <option value=''>Month</option>
            {Array.from({ length: 12 }, (_, index) => (
              <option key={index} value={index + 1}>
                {new Date(0, index).toLocaleString('default', {
                  month: 'long',
                })}
              </option>
            ))}
          </select>
          <select
            name='birthDay'
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          >
            <option value=''>Day</option>
            {daysInMonth.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            name='birthYear'
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          >
            <option value=''>Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </form>
      <Button backgroundColor='white' textColor='black'>
        Next
      </Button>
    </div>
  );
};

export default CreateAccount;
