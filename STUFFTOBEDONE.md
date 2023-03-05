- add remaining characters and their coordinates

- add submit score functionality after game finishes

  - when level finished show prompt | DONE
    to input name and submit score
  - after submit show loading animatiion on button | DONE
  - and show success message or error | DONE with success and error icons showing up

  TODO:

  - Sanitize prompt input
  - Send to database
  - Show appropriate icon if entry into database was success
  - Clear input
  - Hide prompt
  - Maybe redirect back to home screen (And reset found characters if not done by redirect)

- maybe add later loading animation until picture is fully
  store data in database by id. So every level id has its entries
  easier to fetch
  fetch data from database by level id
- loaded and then start timer

BEFORE FETCHING
get selected level id from route
and then fetch with correct id
