const MainText = ({children, project}) => {
  return (
<div className="main__text secondnavbar--away front">
    <section className="main__section">
        <h1 className="main__title">{project}</h1>
        {children}
    </section>
</div>
  );
};

export default MainText;