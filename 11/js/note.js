import { DnD } from "./dnd";

export class Note {
  constructor(button) {
    this.data = [];
    this.container = document.querySelector(".container"); // контейнер, нужен для изоляции заметок от остального html
    this.button = button;

    this._handleClickButton = this._clickButton.bind(this);
    this.setCoords = this._setCoords.bind(this);

    this._init();
  }

  _init() {
    this.button.addEventListener("click", this._handleClickButton);
  }

  // метод для записи координат в data, передаём его в класс DnD
  _setCoords(note, coords) {
    const index = note.getAttribute("data-index");

    this.data[index].left = coords.x;
    this.data[index].top = coords.y;
    console.log(this.data); // если вызвать в контексте класса Note в другом классе, есть доступ к data
  }

  _constructorNote(content, top, left) {
    return {
      content,
      top,
      left,
    };
  }

  _clickButton() {
    const newNoteObj = this._constructorNote("Empty", 48, 24); // передаём дефолтные значения
    this.data.push(newNoteObj);

    this.render();
  }

  _clickCloseButton(index) {
    this.data.splice(index, 1);

    this.render();
  }

  _clickReWriteButton(textareaNode, contentNode, index) {
    console.log(textareaNode, contentNode, index);

    if (textareaNode.hidden) {
      textareaNode.hidden = false;
      contentNode.hidden = true;
    } else {
      textareaNode.hidden = true;
      contentNode.hidden = false;
      this.data[index].content = textareaNode.value;

      this.render();
    }
  }

  _createNote(data, index) {
    const [divNode, buttonNode, textareaNode] = [
      document.createElement("div"),
      document.createElement("button"),
      document.createElement("textarea"),
    ];

    const noteNode = divNode.cloneNode(true);
    noteNode.setAttribute("data-index", index); // index нужен, чтобы найти объект в массиве data
    noteNode.classList.add("note");
    noteNode.style.cssText = `position: absolute; top: ${data.top}px; left: ${data.left}px;`;
    new DnD(noteNode, this.setCoords);

    const btnCloseNode = divNode.cloneNode(true);
    btnCloseNode.classList.add("note__close");
    btnCloseNode.addEventListener("click", () => {
      this._clickCloseButton(index);
    });

    const contentNode = divNode.cloneNode(true);
    contentNode.classList.add("note__content");
    contentNode.innerHTML = data.content;

    textareaNode.classList.add("note__textarea");
    textareaNode.setAttribute("wrap", "hard");
    textareaNode.hidden = true;
    textareaNode.value = data.content;

    const reWriteNode = divNode.cloneNode(true);
    reWriteNode.classList.add("note__rewrite");
    reWriteNode.addEventListener("click", () => {
      this._clickReWriteButton(textareaNode, contentNode, index);
    });

    noteNode.append(btnCloseNode, contentNode, textareaNode, reWriteNode);

    return noteNode;
  }

  render() {
    this.container.innerHTML = ""; // очищаем контейнер перед каждым рендером

    this.data.forEach((noteObj, index) => {
      const noteNode = this._createNote(noteObj, index);

      this.container.append(noteNode);
    });
  }
}
