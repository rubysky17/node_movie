let dataMovie = [
  {
    id: 1,
    name: "Lật mặt 4",
    totalMovieTime: "120",
    poster: "img1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=d44UTUSTYKU&ab_channel=ChilliesChilliesVerified",
  },
  {
    id: 2,
    name: "Trạng t1",
    totalMovieTime: "160",
    poster: "img1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=d44UTUSTYKU&ab_channel=ChilliesChilliesVerified",
  },
  {
    id: 3,
    name: "Thiên thần hộ mệnh",
    totalMovieTime: "145",
    poster: "img1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=d44UTUSTYKU&ab_channel=ChilliesChilliesVerified",
  },
  {
    id: 4,
    name: "Kẻ Vô Sanh",
    totalMovieTime: "134",
    poster: "img1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=d44UTUSTYKU&ab_channel=ChilliesChilliesVerified",
  },
  {
    id: 5,
    name: "Bàn Tay Quỷ Duyệt",
    totalMovieTime: "210",
    poster: "img1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=d44UTUSTYKU&ab_channel=ChilliesChilliesVerified",
  },
  {
    id: 6,
    name: "Hung Thần Trắng",
    totalMovieTime: "120",
    poster: "img1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=d44UTUSTYKU&ab_channel=ChilliesChilliesVerified",
  },
];

const getList = (req, res) => {
  res.status(200).send(dataMovie);
};

const getDetail = (req, res) => {
  const { id } = req.params;

  const index = dataMovie.findIndex((movie) => movie.id === +id);

  if (index === -1) {
    res.status(404).send("movie not found!!!");
  } else {
    res.status(200).send(dataMovie[index]);
  }
};
const create = (req, res) => {
  const { id } = req.params;
  const { name, totalMovieTime, poster, trailer } = req.body;

  const newMovie = {
    id: Math.random(),
    name,
    totalMovieTime,
    poster,
    trailer,
  };

  const newListMovie = [...dataMovie, newMovie];
  dataMovie = newListMovie;

  res.status(200).send(newMovie);
};
const update = (req, res) => {
  const { id } = req.params;
  const { name, totalMovieTime, poster, trailer } = req.body;
  const index = dataMovie.findIndex((movie) => movie.id === +id);

  if (index === -1) {
    res.status(404).send("movie not found!!!");
  } else {
    const movieEdit = {...dataMovie[index], name, totalMovieTime, poster, trailer  };

    dataMovie[index] = movieEdit;
    res.status(200).send(movieEdit);
  }
};

const remove = (req, res) => {
  const { id } = req.params;
  const index = dataMovie.findIndex((movie) => movie.id === +id);

  if (index === -1) {
    res.status(404).send("movie not found!!!");
  } else {
    const newListMovie = [...dataMovie];
    newListMovie.splice(index, 1);
    dataMovie = newListMovie;

    res.status(200).send("Xóa thành công!");
  }
};

module.exports = {
  getList,
  getDetail,
  create,
  remove,
  update,
};
