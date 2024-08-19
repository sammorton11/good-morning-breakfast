export const validateForm = (formData) => {
   const newErrors = {};

   if (!formData.name) {
      newErrors.name = 'Name is required';
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
   }

   const phoneRegex = /^\d{10}$/;
   if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
   }

   if (!formData.message) {
      newErrors.message = 'Message is required';
   }

   return newErrors;
};
