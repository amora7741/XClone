const Tweet = ({ timestamp, content, user }) => {
  return (
    <>
      <h1>{user}</h1>
      <p>{content}</p>
    </>
  );
};

export default Tweet;
