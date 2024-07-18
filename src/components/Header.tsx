import React, { forwardRef } from 'react';

type HeaderProps = {
  // inputRef: React.Ref<HTMLInputElement>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const MyInput = forwardRef(function MyInput(
  props: HeaderProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const { onSubmit } = props;

  return (
    <header className="todoapp__header">
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />

      <form onSubmit={onSubmit}>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="Co trzeba zrobić?"
          ref={ref}
        />
      </form>
    </header>
  );
});
