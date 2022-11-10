import React from "react";
import useCheckListApi from "./hooks/useCheckListApi";
function App() {
  //state
  const [checkList, setCheckList] = React.useState([]);
  const [loadData, setLoadData] = React.useState(true);

  //hooks
  const [getDataFormApi, updateCheckList, CheckedData] = useCheckListApi();

  //redring
  React.useEffect(() => {
    if (CheckedData === false) {
      setLoadData(true);
      getDataFormApi();
    } else {
      if (checkList.length === 0) {
        setCheckList(CheckedData);
      }

      setTimeout(() => {
        setLoadData(false);
      });
    }
  }, [CheckedData]);

  const changeCheck = (index) => {
    checkList[index].isChecked = !checkList[index].isChecked;
    setLoadData(true);

    const data = {
      id: checkList[index]._id,
      isChecked: checkList[index].isChecked,
    };
    updateCheckList(data);
    setCheckList(checkList);
    setTimeout(() => {
      setLoadData(false);
    });
  };

  return (
    <div>
      {loadData === false &&
        checkList.map((data, index) => {
          return (
            <div className="col m-4" key={data._id}>
              <input
                type={"checkbox"}
                name={data._id}
                value={data.name}
                onChange={() => changeCheck(index)}
                checked={data.isChecked}
              ></input>
              <label className="p-3"> {data.name}</label>
            </div>
          );
        })}
    </div>
  );
}

export default App;
