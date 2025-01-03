type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

type Todo = {
  name: string;
  complete: boolean;
};

type Song = {
  image_file_path: string;
  song_url: string;
  singer: string;
  size: number;
  song_file_path: string;
  name: string;
  duration: number;
  id: number;
  image_url: string;
};

type Lyric = {
  start: number;
  end: number;
  text: string;
};

type SongLyric = {
  id: number | null;
  song_id: number;
  base_lyric: string;
  lyrics: string;
};

type SongWithLyric = Song & {
  song_lyric: SongLyric | null;
};
