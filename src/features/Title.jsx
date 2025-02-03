import styled from "styled-components";
import quotesData from "../quotesData";
import { useEffect, useState } from "react";

const Container = styled.div`
  border-radius: 0.5rem;
  height: 14rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 16rem;

  @media (max-width: 1200px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 1040px) {
    padding: 2rem 6rem;
    height: 16rem;
    text-align: center;
  }

  @media (max-width: 845px) {
    padding: 2rem 4rem;
    height: 14rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const H1 = styled.h1`
  font-family: "Jua", serif;
  text-transform: capitalize;
  font-size: 3rem;

  @media (max-width: 845px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  font-size: 1.5rem;
  color: #656565;

  & span {
    font-weight: 600;
    font-size: 1.4rem;

    @media (max-width: 845px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 845px) {
    font-size: 1.4rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

function Title() {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const randomQuote = quotesData[randomIndex];
  const [storedObject, setStoredObject] = useState(quotesData[0]);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours >= 5 && hours <= 11) {
    greeting = "good morning";
  } else if (hours >= 12 && hours <= 16) {
    greeting = "good afternoon";
  } else if (hours >= 17 && hours <= 20) {
    greeting = "good evening";
  } else {
    greeting = "good night";
  }

  useEffect(() => {
    const storedDate = localStorage.getItem("storedDate"); // Get the date when the object was last saved
    const storedObject = localStorage.getItem("dailyObject"); // Get the object saved in localStorage

    if (storedDate !== currentDate) {
      // If it's a new day, create a new object and store it
      const newObject = {
        quote: randomQuote.quote,
        date: currentDate,
        author: randomQuote.author,
      };

      // Save the new object and today's date to localStorage
      localStorage.setItem("storedDate", currentDate);
      localStorage.setItem("dailyObject", JSON.stringify(newObject));

      setStoredObject(newObject); // Set the new object to the state
    } else {
      // If it's the same day, retrieve the object from localStorage
      setStoredObject(JSON.parse(storedObject)); // Parse the stored object from localStorage
    }
  }, [currentDate, randomQuote]);

  return (
    <Container>
      <H1>{greeting}, dana!</H1>

      <P>
        &quot;{storedObject.quote}&quot; - <span>{storedObject.author}</span>
      </P>
    </Container>
  );
}

export default Title;
