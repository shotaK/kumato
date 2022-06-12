import classNames from "classnames";
import Autolinker from "autolinker";
import { Todo } from "Domain/Todo/Types";
import { memo, useMemo } from "react";
import DOMPurify from "dompurify";

import styles from "./TodoText.module.scss";

const TodoText = memo(({ todo }: { todo: Todo }) => {
  const { title, isComplete } = todo;

  const todoText = useMemo(
    () => DOMPurify.sanitize(Autolinker.link(title), { ADD_ATTR: ["target"] }),
    []
  );

  return (
    <span
      className={classNames(
        "text-gray-200 text-sm flex-1",
        {
          "line-through text-gray-400": isComplete,
        },
        styles.todoText
      )}
      dangerouslySetInnerHTML={{ __html: todoText }}
    />
  );
});

export default TodoText;
