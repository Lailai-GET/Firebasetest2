function updateView() {

  main.innerHTML = /*html*/
    `testing 07.03 16:48, 17:10, 17:56, 18:10 
    <button onclick="testRead()">
        test
    </button>
    ${model.test ? `${printScores()}` : "trykk på knappen"}
    `;
}
 function printScores(){
    let html = "";
    if(model.test){
        for (let i = 0; i < model.test.scores.length; i++){
            html += /*html*/ `
            <p>${model.test.scores[i].name}   ${model.test.scores[i].score}</p>
            `;
        }
        return html
    } else return false;
 }