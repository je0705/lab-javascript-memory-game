var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  memoryGame.finished();

  while (memoryGame.finished === false) {

    // Bind the click event of each element to a function
    $('.back').on('click', function () {

      //toogle class of current element
      $(this).toggleClass('back');
      $(this).toggleClass('front');
      //toogle class of next element to current element
      $(this).next().toggleClass('front');
      $(this).next().toggleClass('back');
      //save selected cards in pickedCards
      memoryGame.pickedCards.push($(this).attr('name'));
      console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length == 2) {
        memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
      }

      // //toogle class of current element
      // $(this).toggleClass('front');
      // $(this).toggleClass('back');
      //  //toogle class of next element to current element
      // $(this).next().toggleClass('back');
      // $(this).next().toggleClass('front');



      // (1) Switch cards by toogling classes 
      // (2) Save cards 
      // (3) Check if pairs
      // (4) If pairs -> remove, pairs guessed ++
      // (5) If not pairs -> switch back classes

    });
  };
});



