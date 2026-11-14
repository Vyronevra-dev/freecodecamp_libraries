export function MoodBoardItem({ color, image, description }) {
  return (
    <div style={{
      backgroundColor: color
    }} className="mood-board-item">
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem color="lightblue" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="Ready for adventure? Visit this caves and see the underground world!" />       
        <MoodBoardItem color="beige" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Come to the beaches of Sychelles, the most luxurious island in Africa" />       
        <MoodBoardItem color="#f0f0f0" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="Wanna take some time alone? Visit Uphoriland." />       
        <MoodBoardItem color="pink" image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg" description="Watamu beach, in Kenya, has to be the top things you don't wanna miss out." />       
      </div>
    </div>
  );
}
