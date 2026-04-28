import React from "react";
import NavbarMain from "../../components/maincomponents/NavbarMain";
import Card from "../../components/cards/Card";
import { courses } from "../courses";

const MainPage = () => {
  return (
    <>
      <h1>Welcome to Hispabusiness </h1>
      <div className= "course-flex-container">
        {
          (courses.map((course) => (
            <Card key={course.id} title={course.title} description={course.description} />
          )))
        }
      </div>
    </>
  );
};

export default MainPage;
