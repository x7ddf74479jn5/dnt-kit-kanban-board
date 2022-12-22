import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
export type CardType = {
  id: string;
  title: string;
};

const Card: FC<CardType> = ({ id, title }) => {
  // useSortableに指定するidは一意になるよう設定する
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id,
  });

  const style = {
    margin: "10px",
    opacity: 1,
    color: "#333",
    background: "white",
    padding: "10px",
    transform: CSS.Transform.toString(transform),
  };

  return (
    // attributes、listenersはDOMイベントを検知するため.
    // listenersを任意の領域に付与することで、ドラッグするためのハンドルを作れる。
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div id={id}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
