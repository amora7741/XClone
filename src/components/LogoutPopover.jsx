const LogoutPopover = ({ accountName, onClick }) => {
  return (
    <div className='popover-container'>
      <button onClick={onClick}>Log out @{accountName}</button>
    </div>
  );
};

export default LogoutPopover;
