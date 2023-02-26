const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>hello, {user.name}</h4>
      <p>{user.email}</p>
    </section>
  );
};

export default Dashboard;
