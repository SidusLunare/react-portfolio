const MainText = ({children, project}) => {
  return (
<div class="main__text secondnavbar--away front">
    <section class="main__section">
        <h1 class="main__title">{project}</h1>
        {children}
    </section>
</div>
  );
};

export default MainText;