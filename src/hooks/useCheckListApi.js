import React from "react";
import axios from "axios";
const { BaseUrl } = require("../constants/constants");

const useCheckListApi = () => {
  const [CheckedData, setData] = React.useState(false);
  const getCheckedListApi = async () => {
    await axios({
      method: "get",
      url: `${BaseUrl}getCheckList`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateCheckList = async (data) => {
    await axios({
      method: "put",
      url: `${BaseUrl}updateCheckedList`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return [getCheckedListApi, updateCheckList, CheckedData];
};

export default useCheckListApi;
