// adds data
// to firebase store
const names = [
  "Melina",
  "May",
  "Leonel",
  "Edwards",
  "Junior",
  "James",
  "Cordell",
  "Pitts",
  "Khloe",
  "Barron",
  "Bo",
  "Murray",
  "Uriel",
  "Parrish",
  "Eliezer",
  "Mccarty",
  "Caden",
  "Huerta",
  "Sylvia",
  "Barnes",
  "Alec",
  "Hall",
  "Kristin",
  "Brady",
];

const randomNumber = () => {
  return Math.floor(Math.random() * 501);
};

levels.forEach((level) => {
  names.forEach(async (name) => {
    await addDoc(
      collection(
        doc(db, "highscores", "iXo6ZpqjxwzbBqJLXGMd"),
        level.id
      ),
      {
        name: name,
        time: randomNumber(),
      }
    );
  });
});
