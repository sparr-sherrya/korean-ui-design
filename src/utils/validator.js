// 表单校验工具
export const rules = {
  required: (value) => value !== '' && value != null,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  minLength: (min) => (value) => String(value).length >= min,
  maxLength: (max) => (value) => String(value).length <= max,
};

export function validate(value, validators) {
  const errors = [];
  for (const validator of validators) {
    if (typeof validator === 'string' && rules[validator]) {
      if (!rules[validator](value)) errors.push(`${validator} 校验失败`);
    } else if (typeof validator === 'function') {
      const message = validator(value);
      if (message) errors.push(message);
    }
  }
  return errors;
}

export function validateForm(formData, schema) {
  const result = { valid: true, errors: {} };
  for (const [field, validators] of Object.entries(schema)) {
    const errors = validate(formData[field], validators);
    if (errors.length) {
      result.valid = false;
      result.errors[field] = errors;
    }
  }
  return result;
}
