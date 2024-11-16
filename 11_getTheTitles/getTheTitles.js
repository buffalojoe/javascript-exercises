const getTheTitles = function(objArray) {
    let bookTitles = [];

    for (let item of objArray) {
        bookTitles.push(item.title);
    }

    console.log(bookTitles);
    return bookTitles;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
