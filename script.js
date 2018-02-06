// Tworzenie tablicy movies w [ { } ] o różnych kluczach.
var movies = [
    {   
        id: 1,
        title: 'Harry Potter',
        src: 'https://image.ibb.co/gHymyx/1.png',
        desc: 'Film o czarodzieju',
        year: 2001
    },
    {
        id: 2,
        title: 'Król lew',
        src: 'https://image.ibb.co/nu5c5c/2.png',
        desc: 'Film o królu sawanny',
        year: 1994
    },
    {
        id: 3,
        title: 'Cloud Atlas',
        src: 'https://image.ibb.co/jfiarH/3.png',
        desc: 'Film o reinkarnacji i karmie',
        year: 2012
    },
    {
        id: 4,
        title: 'Forest Gump',
        src: 'https://image.ibb.co/dOaoBH/4.png',
        desc: 'Film o życiu',
        year: 1994
    },
    {
        id: 5,
        title: 'Efekt Motyla',
        src: 'https://image.ibb.co/n2sDdx/5.png',
        desc: 'Film o ingerencji w czas',
        year: 2004
    }
];

// dla każdego elementu - movie w tablicy 'movies' zmapuj na Reactowe Elementy - li, h2, p. Użyj wartości z kluczy title i desc dla każdego z filmów.
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
    React.createElement('h2', {}, movie.title),
    React.createElement('img', {src: movie.src}),
    React.createElement('p', {}, movie.desc),
    React.createElement('p', {}, movie.year)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)   // doczep zmapowaną tablicę 'movies' []
  );


var Movie = React.createClass ({
  propTypes: {
      id: React.PropTypes.number.isRequired,
  },
    
    render: function() {
        return (
            React.createElement(Movie, {key: movie.id})
        )
    },
});

var MovieTitle = React.createClass ({
  propTypes: {
      title: React.PropTypes.string.isRequired,
  },
    
    render: function() {
        return (
            React.createElement(Movie, {key: movie.title})
        )
    },
});

var MovieDescription = React.createClass ({
  propTypes: {
      desc: React.PropTypes.string.isRequired,
  },
    
    render: function() {
        return (
            React.createElement(Movie, {key: movie.desc})
        )
    },
});

var MoviesList = React.createClass ({
  propTypes: {
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      image: React.PropTypes.object.isRequired,
      desc: React.PropTypes.string.isRequired,
      year: React.PropTypes.number.isRequired,
  },
    
    render: function() {
        return (
            React.createElement(movies, {key: movie.id}, movie.title, {src: movie.src}, movie.desc, movie.year)
        )
    },
});

// Wyrenderowanie nowego elementu w węźle DOM o id="app".
ReactDOM.render(element, document.getElementById('app'));