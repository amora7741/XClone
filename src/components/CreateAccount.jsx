import { useState, useEffect } from 'react';
import Button from './Button';
import axios from 'axios';

const CreateAccount = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
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

    setDaysInMonth(updateDays(formData.birthMonth, formData.birthYear));

    if (formData.birthDay) {
      const maxDays = new Date(
        formData.birthYear,
        formData.birthMonth,
        0
      ).getDate();
      if (formData.birthDay > maxDays) {
        setFormData({ ...formData, birthDay: '' });
      }
    }
  }, [formData.birthMonth, formData.birthYear, formData.birthDay]);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, index) => currentYear - index
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_API}/api/users`;

    try {
      const response = await axios.post(url, formData);

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='createaccount-container'>
      <form onSubmit={handleFormSubmit}>
        {page === 1 && (
          <>
            <h1>Create your account</h1>
            <div className='fieldholder'>
              <input
                type='text'
                required
                name='name'
                id='name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='fieldholder'>
              <input
                type='email'
                required
                name='email'
                id='email'
                value={formData.email}
                onChange={handleInputChange}
              />
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
                  value={formData.birthMonth}
                  onChange={handleInputChange}
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
                  value={formData.birthDay}
                  onChange={handleInputChange}
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
                  value={formData.birthYear}
                  onChange={handleInputChange}
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
              <input
                type='text'
                name='username'
                id='username'
                required
                value={formData.username}
                onChange={handleInputChange}
              />
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
              <input
                type='text'
                name='password'
                id='password'
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <label htmlFor='password'>Password</label>
            </div>
            <div className='fieldholder'>
              <input
                type='text'
                name='confirmPassword'
                id='confirmPassword'
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <label htmlFor='confirmPassword'>Confirm Password</label>
            </div>
            <p className='signup-terms'>
              By signing up, you agree to the <span>Terms of Service</span> and{' '}
              <span>Privacy Policy</span>, including <span>Cookie Use</span>. X
              may use your contact information, including your email address and
              phone number for purposes outlined in our Privacy Policy, like
              keeping your account secure and personalizing our services,
              including ads. <span>Learn more</span>. Others will be able to
              find you by email or phone number, when provided, unless you
              choose otherwise <span>here</span>.
            </p>
            <Button backgroundColor='white' textColor='black' type='submit'>
              Sign Up
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default CreateAccount;
