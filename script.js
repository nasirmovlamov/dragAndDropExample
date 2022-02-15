const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill')




function dragOver(event){
    event.preventDefault();
    this.classList.add('drag-over');
    event.dataTransfer.dropEffect = "all"
}

function dragEnter(event){
    event.preventDefault();
    this.classList.add('drag-over');
}

function dragLeave(event){
    event.preventDefault();
    this.classList.remove('drag-over');

}

function dragStart(event){
    this.classList.add('is-dragging');
    event.dataTransfer.setData("text", event.target.id)
}

function dragEnd (event) {
    
    this.classList.remove('is-dragging');
}

function dragDrop (event) {
    event.preventDefault();
    const data  = event.dataTransfer.getData("text");
    this.classList.remove('drag-over');
    this.appendChild(document.getElementById(data));
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', dragDrop);
})


