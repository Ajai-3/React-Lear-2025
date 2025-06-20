import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .then((err) => {
        console.log(err);
      });

    return () => {
      setData([]);
    };
  }, []);
  return (
    <div>
      Fetch
      {loading ? (
        <div>loading ... </div>
      ) : (
        <div>
          {data.map((item, i) => (
            <div key={i}>
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fetch;
