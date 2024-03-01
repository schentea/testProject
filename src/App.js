import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios를 사용하여 PHP 파일에서 데이터를 가져옴
        const response = await axios.get("http://52.78.17.127/test.php");
        setData(response.data); // 데이터를 상태에 설정
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터 가져오기 함수 호출
  }, []);

  return (
    <div>
      <h1>Data from PHP</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <div>{item.id}</div>
            <div>{item.username}</div>
            <div>{item.password}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
