function updateView() {
    import("/firebase.js")
    .then((module) => {
      window.testRead = module.testRead;
    })
    .catch((error) => console.error(error));
  main.innerHTML = `testing 07.03 16:48, 17:10, 17:56 <button onclick="testRead()">test</button>`;
}
