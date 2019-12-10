import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { useMessagesList } from "./useMessagesList";
import messagesListModule from "./module";

const MessagesList = () => {
  const { messagesStore, addMessage } = useMessagesList();
  let input;

  const showMessages = messages => {
    return messages.map((message, index) => {
      return <li key={index}>{message}</li>;
    });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            addMessage(input.value);
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">メッセージを追加</button>
        </form>
      </div>
      <div>メッセージ一覧</div>
      <ul>{showMessages(messagesStore)}</ul>
    </div>
  );
};

export default () => (
  <DynamicModuleLoader modules={[messagesListModule()]}>
    <MessagesList />
  </DynamicModuleLoader>
);
