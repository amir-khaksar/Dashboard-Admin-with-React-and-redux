import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Courses.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import { Link } from "react-router-dom";
import { getCoursesFromServer } from "../../Redux/store/courses";

export default function Courses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCoursesFromServer("https://redux-cms.iran.liara.run/api/courses")
    );
  }, []);

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
        <ul className="content__tabs">
          <li className="content__tab">
            <Link to="/users" className="content__tab-link">
              <span className="fa fa-user"></span>
              کاربران
            </Link>
          </li>
          <li className="content__tab">
            <a href="infomation-admin.html" className="content__tab-link">
              <span className="fa fa-book"></span>
              اطلاعات
            </a>
          </li>
          <li className="content__tab">
            <Link to="/courses" className="content__tab-link">
              <span className="fa fa-store"></span>
              دوره‌ها
            </Link>
          </li>

          <li className="content__tab">
            <a href="weblog-admin.html" className="content__tab-link">
              <span className="fa fa-newspaper"></span>
              وبلاگ
            </a>
          </li>
        </ul>
        <div className="active"></div>

        <div className="products products-container">
          <div className="products__list products-wrapper">
            {courses.map((course) => (
              <CourseBox key={course._id} {...course} />
            ))}
          </div>
        </div>

        <div className="new-course d-flex gap-2">
          <button
            className="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-product"
          >
            افزودن دوره جدید
          </button>
          <button
            className="btn-custome btn-custome__red"
            data-bs-toggle="modal"
            data-bs-target="#add-discount-all-product"
          >
            اعمال تخفیف همه دوره‌ها
          </button>
          <button
            className="btn-custome btn-custome__green btn-modal-new-category"
            data-bs-toggle="modal"
            data-bs-target="#add-new-category"
          >
            افزودن دسته بندی
          </button>
        </div>
      </div>
    </div>
  );
}
