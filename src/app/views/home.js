const renderManager = (() => {

  const renderHome = () => {
    injectElemets('Home');
  }

  const renderAbout = () => {
    injectElemets('About');
  }

  const injectElemets = (name) => {
    const container = document.querySelector('.container');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    h1.innerText = `Hello from ${name}`;
    container.appendChild(h1);
    p.innerText = `Paragraph from ${name}`;
    container.appendChild(p);
  }
  return { renderHome }
})();

export default renderManager;