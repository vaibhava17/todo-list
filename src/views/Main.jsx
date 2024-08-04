import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import AppInput from "../components/Input";
import AppList from "../components/List";
import AppCheckbox from "../components/Checkbox";
import AppButton from "../components/Button";

const Main = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filterTodoList, setFitlerTodoList] = useState([]);
  const [activeItems, setActiveItems] = useState(0);
  const [activeState, setActiveState] = useState("all");

  useEffect(() => {
    let activeCount = todoList.filter((item) => item.active).length;
    setActiveItems(activeCount);
  }, [todoList]);

  useEffect(() => {
    if (activeState === "all") {
      setFitlerTodoList(todoList);
    } else if (activeState === "active") {
      setFitlerTodoList(todoList.filter((item) => item.active));
    } else {
      setFitlerTodoList(todoList.filter((item) => !item.active));
    }
  }, [activeState, todoList]);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const addTodoAction = (e) => {
    e.preventDefault();
    let count = todoList.length;
    let newTodoItem = {
      id: count + 1,
      value: inputVal,
      name: inputVal,
      active: true,
    };
    setTodoList([...todoList, newTodoItem]);
    setInputVal("");
  };

  const handleCheckUncheckAll = () => {
    let newTodoList = todoList.map((item) => {
      return {
        ...item,
        active: item.active ? false : true,
      };
    });

    setTodoList(newTodoList);
  };

  const handleCheckEvent = (e) => {
    let checked = e.target.checked;
    let newTodoList = todoList.map((item) => {
      if (item.value == e.target.value) {
        return {
          ...item,
          active: !checked,
        };
      } else {
        return item;
      }
    });

    setTodoList(newTodoList);
  };

  const handleState = (val) => {
    setActiveState(val);
  };

  const handleClearCompleted = () => {
    let newList = todoList.filter((item) => !item.active);
    setTodoList(newList);
  };

  return (
    <Row align="center">
      <Col span={12}>
        <Typography.Title className="main-label">Todos</Typography.Title>
      </Col>
      <div className="w-100"></div>
      <Col span={12}>
        <Row align="center">
          <Col span={12}>
            <AppButton
              label={"check/uncheck all"}
              onClick={handleCheckUncheckAll}
            />
          </Col>
          <Col span={12}>
            <AppInput
              value={inputVal}
              onChange={handleInputChange}
              name="new-item-input"
              onPressEnter={addTodoAction}
            />
          </Col>
        </Row>
      </Col>
      <div className="w-100"></div>
      <Col span={12}>
        <AppList
          dataSource={filterTodoList}
          renderItem={(item) => {
            return (
              <div>
                <AppCheckbox
                  label={item.value}
                  value={item.value}
                  checked={!item.active}
                  id={item.id}
                  onChange={handleCheckEvent}
                />
              </div>
            );
          }}
          footer={
            <Row>
              <Col span={8}>{activeItems} items left!</Col>
              <Col span={8}>
                <Row>
                  <Col span={8}>
                    <AppButton
                      label={"all"}
                      onClick={() => handleState("all")}
                    />
                  </Col>
                  <Col span={8}>
                    <AppButton
                      label={"active"}
                      onClick={() => handleState("active")}
                    />
                  </Col>
                  <Col span={8}>
                    <AppButton
                      label={"completed"}
                      onClick={() => handleState("completed")}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <AppButton
                  label={"clear completed"}
                  onClick={() => handleClearCompleted()}
                />
              </Col>
            </Row>
          }
        />
      </Col>
    </Row>
  );
};

export default Main;
