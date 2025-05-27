import "./statistic.css";

const Statistic = ({ text, check }) => {
  console.log(text);
  if (check === "characters") {
    return (
      <div className="statistic">
        <h2 className="h2">Счётчик символов</h2>
        <h2 className="h2">{text.length}</h2>
      </div>
    );
  }
  if (check === "words") {
    const cleanSpace = text.replace(/\s+/g, " ").trim(); //Команда чтобы убрать два и более пробела при подсчете количества слов

    const words = cleanSpace.split(" "); //Разбиваем строку cleanSpace на массив слов и спецсимволов
    const spaceCount = words.filter(
      (char) => char !== "" && char !== "-" && char !== "—",
    ).length; //Фильтруем массив, оставляя только слова, берем длину массива со словами

    return (
      <div className="words">
        <h2 className="h2">Счётчик слов</h2>
        <h2 className="h2">{spaceCount}</h2>
      </div>
    );
  }
  if (check === "sentences") {
    const sentenceCount = [...text].reduce(
      (count, char) =>
        char === "." || char === "?" || char === "!" ? count + 1 : count,
      0,
    );
    return (
      <div className="sentences">
        <h2 className="h2">Счётчик предложений</h2>
        <h2 className="h2">{sentenceCount}</h2>
      </div>
    );
  }
};

export default Statistic;
