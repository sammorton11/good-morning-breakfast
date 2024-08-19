import { test, expect } from '@playwright/test';
import { validateForm } from "../../helpers/formValidation";

test('should validate form inputs correctly', () => {
   const formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
   };

   const errors = validateForm(formData);

   expect(errors.name).toBe('Name is required');
   expect(errors.email).toBe('Valid email is required');
   expect(errors.phone).toBe('Valid 10-digit phone number is required');
   expect(errors.message).toBe('Message is required');
});
