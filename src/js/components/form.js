import { validateForms } from "./../functions/validate-forms.js";

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

const rulesChooseServiceForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите свою почту",
      },
      {
        rule: "email",
        errorMessage: "Не верно указана почта",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
];

validateForms("#choose-application-form", rulesChooseServiceForm, afterForm);
validateForms(
  "#choose-application-form-section",
  rulesChooseServiceForm,
  afterForm
);
