import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

const Learn = ({ data }) => {
  // console.log(data);
  const { id } = useParams();
  // console.log(id);
  console.log(data[0].id);
  return (
    <Wrapper>
      <h1>Learn Page</h1>
      <button>
        <Link to={"/"}>Back</Link>
      </button>
      {data.map((data) => {
        // console.log(data.id)
        if (id === data.id) {
          console.log(data.id);
          return (
            <div className="volvo_cardContainer">
              <div key={data.id}>
                <p>{data.bodyType}</p>
                <div>
                  <CarsInfo>
                    <strong>{data.modelName}</strong>
                    <span>{data.modelType}</span>
                  </CarsInfo>
                </div>
              </div>
              <img
                className="volvo__img"
                src={data.imageUrl}
                alt={data.id}
                width="500px"
                height="100%"
              />
            </div>
          );
        }
      })}
    </Wrapper>
  );
};

export default Learn;

const Wrapper = styled.div`
  height: 80vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;

  button, link{
    border:1px solid black;
    padding:5px 30px;
    border-radius:5px;
    text-decoration: none;
  }
`;

const CarsInfo = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  span {
    margin-left: 4px;
  }
`;
