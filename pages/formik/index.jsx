import HeadPage from "../../components/HeadPage";
import { Formik } from "formik";
import * as yup from "yup";
import { Main } from "../../components/Main";

export default function Form() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    secondName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают!")
      .required("Обязательное поле"),
    email: yup
      .string()
      .email("Введите верный email!")
      .required("Обязательное поле!"),
    confirmEmail: yup
      .string()
      .email("Введите верный email!")
      .oneOf([yup.ref("email")], "Email не совпадает!")
      .required("Обязательное поле!"),
  });

  return (
    <Main>
      <HeadPage />
      <div className="container form-cont">
        <Formik
          initialValues={{
            name: "",
            secondName: "",
            password: "",
            confirmPassword: "",
            email: "",
            confirmEmail: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className="form">
              <div className="input-cont">
                <label htmlFor="name">Имя</label> <br />
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <p className="error-msg">{errors.name}</p>
                )}
              </div>
              <div className="input-cont">
                <label htmlFor="secondName">Фамилия</label> <br />
                <input
                  type="text"
                  name="secondName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secondName}
                />
                {touched.secondName && errors.secondName && (
                  <p className="error-msg">{errors.secondName}</p>
                )}
              </div>

              <div className="input-cont">
                <label htmlFor="password">Пароль</label> <br />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <p className="error-msg">{errors.password}</p>
                )}
              </div>

              <div className="input-cont">
                <label htmlFor="confirmPassword">Подтвердите пароль</label>{" "}
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p className="error-msg">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="input-cont">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <p className="error-msg">{errors.email}</p>
                )}
              </div>

              <div className="input-cont">
                <label htmlFor="confirmEmail">Подтвердите Email</label> <br />
                <input
                  type="email"
                  name="confirmEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmEmail}
                />
                {touched.confirmEmail && errors.confirmEmail && (
                  <p className="error-msg">{errors.confirmEmail}</p>
                )}
              </div>
              <button
                className="form-btn"
                disabled={!isValid}
                onClick={handleSubmit}
                type="submit"
              >
                Отправить
              </button>
            </div>
          )}
        </Formik>
      </div>
    </Main>
  );
}
