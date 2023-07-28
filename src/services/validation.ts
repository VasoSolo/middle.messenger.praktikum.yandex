interface IValiRule {
  regExp: RegExp;
  errorMessage: string;
}

const validationRules: Record<string, IValiRule> = {
  first_name: {
    regExp: /^[А-ЯA-Z]{1}[а-яa-z-]*$/,
    errorMessage: "Первая буква должна быть заглавной, без пробелов и без цифр",
  },

  second_name: {
    regExp: /^[А-ЯA-Z]{1}[а-яa-z-]*$/,
    errorMessage: "Первая буква должна быть заглавной, без пробелов и без цифр",
  },

  email: {
    regExp: /^[A-Za-z0-9-]+@[A-Za-z]+(\.[A-Za-z]+)+$/,
    errorMessage: "Вы ввели не email ",
  },

  login: {
    regExp: /^(?!^\d+)[a-zA-Z0-9-_]{3,20}$/,
    errorMessage:
      "Логин от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)",
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

  NewPasswordAgain: {
    regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorMessage: "Password should be 8-40 symbols, capital letter and number",
  },

  message: {
    regExp: /^.+$/,
    errorMessage: "Не может быть пустым",
  },
};

const validationCheck = (event: InputEvent): void => {
  const targetInput = event.target as HTMLInputElement;
  const parent = targetInput.parentElement;
  const error = parent?.querySelector(".input_error");
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
  validationCheck(event);
};

export const submit = (event: Event): void => {
  let validData: Record<string, string> = {};
  let allIsValid: boolean | undefined = true;
  event.preventDefault();
  const formInputs = document.querySelectorAll<HTMLInputElement>("input");
  formInputs.forEach((input: HTMLInputElement) => {
    const currentValidationInput = validationRules[input.name];
    const { regExp } = currentValidationInput;
    if (input.value === "" || !regExp.test(input.value)) {
      console.error(currentValidationInput.errorMessage);
      allIsValid = false;
    } else {
      validData[input.name] = input.value.toString();
    }
  });
  if (allIsValid) {
    console.log(validData);
  }
};
