interface IValiRule {
  regExp: RegExp;
  errorMessage: string;
}

const validationRules: Record<string, IValiRule> = {
  first_name: {
    regExp: /^[А-ЯA-Z]{1}[а-яa-z-]*$/,
    errorMessage:
      "Первая буква в имени должна быть заглавной,имя должно быть без пробелов и без цифр",
  },

  second_name: {
    regExp: /^[А-ЯA-Z]{1}[а-яa-z-]*$/,
    errorMessage:
      "Первая буква в фамилии должна быть заглавной,фамилия должна быть без пробелов и без цифр",
  },

  email: {
    regExp: /^[A-Za-z0-9_\-]+@[A-Za-z]+\.[A-Za-z]+$/,
    errorMessage: "Вы ввели некорректный email ",
  },

  login: {
    regExp: /^(?!^\d+)[a-zA-Z0-9-_]{3,20}$/,
    errorMessage:
      "Логин должен содержать от 3 до 20 символов: латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)",
  },

  phone: {
    regExp: /^((8|\+7)[ -]?)?(\(?\d{3}\)?[ -]?)?[\d -]{10,15}$/,
    errorMessage:
      "Телефон должен быть от 10 до 15 символов и состоять только из цифр",
  },

  password: {
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorMessage:
      "Пароль должен от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра",
  },

  newPassword: {
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorMessage:
      "Пароль должен от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра",
  },

  message: {
    regExp: /^.+$/,
    errorMessage: "Не может быть пустым",
  },
};

const validationCheck = (event: InputEvent): void => {
  const targetInput = event.target as HTMLInputElement;
  // console.log("targetInput", targetInput);
  const parent = targetInput.parentElement;
  // console.log("parent", parent);

  const error = parent?.querySelector(".error");
  const nameInput = validationRules[targetInput.name];
  const isValid = nameInput.regExp.test(targetInput.value);

  if (!isValid) {
    error!.textContent = nameInput.errorMessage;
  } else {
    error!.textContent = "";
  }
};

export const focusin = (event: InputEvent): void => {
  validationCheck(event);
};

export const focusout = (event: InputEvent): void => {
  // console.log(event);
  validationCheck(event);
};

export const submit = (event: Event): boolean => {
  // console.log(event);
  event.preventDefault();
  let validData: Record<string, string> = {};
  let allIsValid: boolean | undefined = true;
  const formInputs = document.querySelectorAll<HTMLInputElement>(".input");
  console.log("formInputs", formInputs);
  formInputs.forEach((input: HTMLInputElement) => {
    const error = input.parentElement?.querySelector(".error");
    const currentValidationInput = validationRules[input.name];
    const { regExp } = currentValidationInput;
    if (input.value === "" || !regExp.test(input.value)) {
      console.error(currentValidationInput.errorMessage);

      error!.textContent = currentValidationInput.errorMessage;
      allIsValid = false;
    } else {
      error!.textContent = "";
      validData[input.name] = input.value.toString();
    }
  });
  // console.log("allIsValid", allIsValid);
  if (allIsValid) {
    return true;
  } else {
    return false;
  }
};
