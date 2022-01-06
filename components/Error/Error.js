class Error {
  render() {
    const html = `
        <div class = "error-wrapper">
           <div class = "error-container">
                <h2>Произошла ошибка</h2>
                <h3>Попробуйте перезагрузить страницу</h3>
           </div> 

        </div>
        
      
      `;
    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
