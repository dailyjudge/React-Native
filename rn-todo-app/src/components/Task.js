import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { icons } from "../icons";
import Input from "./Input";
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
`;

const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    if (isEdit) {
      const updatedItem = Object.assign({}, item);
      updatedItem["text"] = text;
      setIsEdit(false);
      updateTask(updatedItem);
    }
  };
  return isEdit ? (
    <Input
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={_onSubmit}
      onBlur={() => {
        setText(item.text);
        setIsEdit(false);
      }}
    />
  ) : (
    <Container>
      <IconButton
        icon={item.completed ? icons.check : icons.uncheck}
        item={item}
        onPress={toggleTask}
      />
      <Contents completed={item.completed}>{item.text}</Contents>
      {item.completed || (
        <IconButton icon={icons.edit} onPress={() => setIsEdit(true)} />
      )}
      <IconButton icon={icons.delete} item={item} onPress={deleteTask} />
    </Container>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;
