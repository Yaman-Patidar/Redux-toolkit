import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ADD_ITEM, DELETE_ITEM } from "../actions/actionType";
import ModelComponent from "../model/Model";

const AddItem = () => {
  const [stateHolder, setStateHolder] = useState({
    id: "",
    firstName: "",
    secondName: "",
    isUpdated: false,
  });
  const [show, setShow] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const isSubmit = () => {
    if (!stateHolder.firstName) {
      alert("Please Enter the firstname");
      return;
    }
    if (!stateHolder.secondName) {
      alert("Please Enter the lastname");
      return;
    }
    dispatch({
      type: ADD_ITEM,
      payload: stateHolder,
    });
    setStateHolder({
      id: "",
      firstName: "",
      secondName: "",
      isUpdated: false,
    });
  };
  const editItem = (item) => {
    setStateHolder({
      id: item.id,
      firstName: item.firstName,
      secondName: item.secondName,
    });
    setShow(true);
  };
  const removeItem = (id) => {
    dispatch({
      type: DELETE_ITEM,
      payload: { id: id },
    });
  };

  return (
    <div className="App">
      <h1>
        Hello {state.firstName} {state.secondName}
      </h1>
      <input
        type="text"
        value={stateHolder.firstName}
        onChange={(e) =>
          setStateHolder({ ...stateHolder, firstName: e.target.value })
        }
      />
      <input
        type="text"
        value={stateHolder.secondName}
        onChange={(e) =>
          setStateHolder({
            ...stateHolder,
            secondName: e.target.value,
          })
        }
      />
      {state.userDetails.map((item, index) => {
        return (
          <div key={item.id} className="user-name">
            <span >
              {item.firstName} {item.secondName}
              <span className="ms-4" onClick={() => editItem(item)}>[edit]</span>
              <span className="ms-4" onClick={() => removeItem(item.id)}>[x]</span>
            </span>
          </div>
        );
      })}

      <button className="sb-btn" onClick={() => isSubmit()}>Submit</button>
      {show && (
        <ModelComponent
          show={show}
          setShow={setShow}
          stateHolder={stateHolder}
          setStateHolder={setStateHolder}
        />
      )}
    </div>
  );
};

export default AddItem;
