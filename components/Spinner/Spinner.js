class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = "";
  }
  render() {
    const htmlContainer = `
        <div class = "spinner-container">
            <img class = "spinner-img"src = "./img/Spinner-2s-200px.svg"/>
        </div>
    
    `;
    ROOT_SPINNER.innerHTML = htmlContainer;
  }
}

const spinnerPage = new Spinner();
