import { Movie } from "../../type";

type ModalProps = {
  movie: Movie;
  onClose: () => void;
};

const Modal = ({ movie, onClose }: ModalProps) => {
  const image_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white p-5 rounded-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // モーダル内クリックで閉じないようにする
      >
        <button className="absolute top-3 right-3 text-2xl" onClick={onClose}>
          ✖
        </button>
        <img
          className="w-full h-60 object-cover rounded"
          src={`${image_url}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p className="mt-2 text-gray-300">
          {movie.overview || "説明がありません。"}
        </p>
      </div>
    </div>
  );
};

export default Modal;
